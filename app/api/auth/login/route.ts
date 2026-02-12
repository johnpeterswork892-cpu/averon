import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    console.log('=== LOGIN ATTEMPT ===');
    console.log('Received email:', email);
    console.log('Password length:', password?.length);

    // Get admin credentials from environment variables
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    console.log('Env ADMIN_EMAIL:', ADMIN_EMAIL);
    console.log('Env ADMIN_PASSWORD exists:', !!ADMIN_PASSWORD);
    console.log('Env ADMIN_PASSWORD length:', ADMIN_PASSWORD?.length);

    // Validate environment variables are set
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.error('❌ Admin credentials not configured in environment variables');
      console.error('ADMIN_EMAIL exists:', !!ADMIN_EMAIL);
      console.error('ADMIN_PASSWORD exists:', !!ADMIN_PASSWORD);
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error - Admin credentials not set in environment variables',
          debug: {
            hasEmail: !!ADMIN_EMAIL,
            hasPassword: !!ADMIN_PASSWORD
          }
        },
        { status: 500 }
      );
    }

    console.log('Email match:', email === ADMIN_EMAIL);
    console.log('Password match:', password === ADMIN_PASSWORD);
    console.log('Email comparison:', { received: email, expected: ADMIN_EMAIL });

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      console.log('✅ Login successful!');
      
      // Create response with success
      const response = NextResponse.json({
        success: true,
        message: 'Login successful',
      });

      // Set a simple cookie as backup verification
      response.cookies.set('admin_session', 'active', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/admin',
      });

      return response;
    }

    // Invalid credentials
    console.log('❌ Invalid credentials');
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid email or password',
        debug: {
          emailMatch: email === ADMIN_EMAIL,
          passwordMatch: password === ADMIN_PASSWORD
        }
      },
      { status: 401 }
    );
  } catch (error) {
    console.error('❌ Login API Error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred during login',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
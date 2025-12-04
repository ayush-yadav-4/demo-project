'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/providers/AuthProvider';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';

const ALLOWED_ADMIN_EMAILS = new Set(['lhp01691@gmail.com', 'ayushyadavv4@gmail.com']);

export default function AdminSignin() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    // If user is already logged in and allowed, redirect to dashboard
    if (!loading && user && ALLOWED_ADMIN_EMAILS.has(user.email)) {
      router.push('/admin');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      {/* Signin Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500">Secure access for authorized administrators</p>
          </div>

          {/* Info Message */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <p className="text-blue-700 text-sm">
              Sign in with Google using an authorized email address to access the admin panel.
            </p>
          </div>

          {/* Google Sign In Button */}
          <GoogleAuthButton
            text="Sign in with Google"
            redirectTo="/admin"
          />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Admin Portal</span>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700">Access Features:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                User Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Services & Content
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Blog Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Order Tracking
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              This is a secured area. Only authorized administrators can access this portal.
            </p>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
          <p className="text-sm text-gray-600">
            Not an admin? <span className="text-blue-600 font-medium">Contact support for access</span>
          </p>
        </div>
      </div>
    </div>
  );
}
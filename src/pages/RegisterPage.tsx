import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';

export default function RegisterPage() {
  const { user, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && role) {
      if (role === 'admin') {
        navigate('/dashboard/admin');
      } else if (role === 'teacher') {
        navigate('/dashboard/teacher');
      } else {
        navigate('/dashboard/student');
      }
    }
  }, [user, role, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

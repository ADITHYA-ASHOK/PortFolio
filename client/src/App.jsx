import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import GalaxyBackground from './components/three/GalaxyBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import CustomCursor from './components/layout/CustomCursor';
import BackToTop from './components/layout/BackToTop';
import LoadingScreen from './components/layout/LoadingScreen';

const HomePage = lazy(() => import('./pages/HomePage'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const CertificationsDashboard = lazy(() => import('./pages/CertificationsDashboard'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function MainLayout({ children }) {
  return (
    <>
      <GalaxyBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}

function AdminLayout({ children }) {
  return (
    <>
      <div className="fixed inset-0 bg-background -z-10" />
      <main className="relative z-10">{children}</main>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <LoadingScreen />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <HomePage />
                </MainLayout>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <AdminLogin />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/certifications"
              element={
                <MainLayout>
                  <CertificationsDashboard />
                </MainLayout>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

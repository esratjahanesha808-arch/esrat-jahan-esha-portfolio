import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Lazy loading page routes for performance optimization (per ADR-008 & ADR-006)
const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Scroll restoration helper to reset scroll position on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-brand-bg-primary text-brand-text-primary overflow-x-hidden selection:bg-brand-accent/20 selection:text-brand-accent-light">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen bg-brand-bg-primary">
              <div className="w-12 h-12 rounded-full border-2 border-brand-accent/20 border-t-brand-accent animate-spin" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

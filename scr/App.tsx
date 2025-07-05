import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AppDataProvider } from './contexts/AppDataContext';
import AuthForm from './components/AuthForm';
import Layout from './components/Layout';
import EnhancedDashboard from './pages/EnhancedDashboard';
import Goals from './pages/Goals';
import Weight from './pages/Weight';
import EnhancedNutrition from './pages/EnhancedNutrition';
import EnhancedWorkouts from './pages/EnhancedWorkouts';
import Achievements from './pages/Achievements';
import ProgressPhotos from './pages/ProgressPhotos';
import WellnessHub from './pages/WellnessHub';
import AdvancedAnalyticsPage from './pages/AdvancedAnalytics';
import SmartReminders from './pages/SmartReminders';
import ResetPassword from './pages/ResetPassword';

const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();

  console.log('🎯 AppContent render - user:', !!user, 'isLoading:', isLoading);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FitTracker Pro...</p>
          <p className="text-sm text-gray-500 mt-2">Please wait a moment...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    console.log('🚫 No user, showing auth form');
    return <AuthForm />;
  }

  console.log('✅ User authenticated, showing app');
  return (
    <AppDataProvider>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<EnhancedDashboard />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/nutrition" element={<EnhancedNutrition />} />
          <Route path="/workouts" element={<EnhancedWorkouts />} />
          <Route path="/wellness" element={<WellnessHub />} />
          <Route path="/analytics" element={<AdvancedAnalyticsPage />} />
          <Route path="/reminders" element={<SmartReminders />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/photos" element={<ProgressPhotos />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </AppDataProvider>
  );
};

function App() {
  console.log('🚀 App render');
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
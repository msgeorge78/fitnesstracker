# FitTracker Pro

A professional fitness tracking application built with React, TypeScript, and Supabase.

## Features

- 🎯 **Goal Setting & Tracking** - Set and monitor fitness goals with progress tracking
- ⚖️ **Weight Management** - Log weight entries and calculate BMI automatically
- 🍽️ **Nutrition Tracking** - Log meals with AI-powered calorie estimation
- 💪 **Workout Logging** - Track workouts with duration and calories burned
- 📊 **Dashboard Analytics** - View daily stats and progress overview
- 🔐 **Secure Authentication** - User accounts with row-level security

## Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd fitness-tracker-pwa
npm install
```

### 2. Set Up Supabase (Required for full functionality)

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the project to be ready

2. **Get Your Credentials**
   - Go to Project Settings → API
   - Copy your Project URL and anon/public key

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory
   - Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

4. **Set Up Database**
   - The database schema will be automatically created when you first run the app
   - Tables include: profiles, goals, weight_logs, meals, workouts

### 3. Run the Application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Demo Mode

If Supabase is not configured, the app runs in demo mode with limited functionality:
- Authentication is disabled
- Data is not persisted
- Setup instructions are shown in the UI

## Database Schema

The app uses the following main tables:

- **profiles** - User profile information
- **goals** - Fitness goals with progress tracking
- **weight_logs** - Weight entries with BMI calculation
- **meals** - Food logging with calorie tracking
- **workouts** - Exercise sessions with duration and calories

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **PWA**: Vite PWA Plugin

## Features in Detail

### Goal Management
- Create goals in categories: Fitness, Weight, Nutrition, Wellness
- Track progress with percentage completion
- Set target dates and monitor deadlines

### Weight Tracking
- Log daily weight entries
- Automatic BMI calculation
- Visual progress tracking
- Height management in user profile

### Nutrition Logging
- Log meals by type (Breakfast, Lunch, Dinner, Snack)
- AI-powered calorie estimation
- Daily calorie summaries
- Food name auto-suggestions

### Workout Tracking
- Log workouts by type (Cardio, Strength, Flexibility, Sports, Other)
- Track duration and estimated calories burned
- Add optional notes
- Daily activity summaries

### Dashboard
- Today's activity overview
- Quick action buttons
- Goal progress summaries
- Recent activity feed

## Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Secure authentication with Supabase Auth
- Environment variables for sensitive configuration

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts for state management
├── pages/          # Main application pages
├── lib/           # Utility libraries and configurations
├── types/         # TypeScript type definitions
└── utils/         # Helper functions
```

## Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Ensure environment variables are set in your hosting environment
4. Configure your Supabase project for production

## Support

If you encounter issues:

1. Check that your `.env` file is properly configured
2. Verify your Supabase project is active
3. Check the browser console for detailed error messages
4. Ensure all required environment variables are set

## License

This project is licensed under the MIT License.
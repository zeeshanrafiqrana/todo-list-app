# React Native Todo App with Expo

A simple Todo List application built with React Native, Expo, TypeScript, and React Hooks. The app demonstrates modern React Native development practices with API integration.

## Features

- View tasks fetched from JSONPlaceholder API
- Add new tasks with optimistic updates
- Mark tasks as completed
- Delete tasks with rollback on error
- Pull-to-refresh functionality
- Loading states and error handling
- Keyboard handling
- TypeScript support

## Project Structure

```
todolistapp/
├── src/
│   ├── components/
│   │   └── TaskItem.tsx      # Reusable task component
│   ├── screens/
│   │   └── HomeScreen.tsx    # Main screen with task management
│   ├── services/
│   │   └── api.ts           # API integration layer
│   ├── types/
│   │   └── Task.ts          # TypeScript definitions
│   └── App.tsx              # Root component
├── app/
│   ├── (todo)/
│   │   ├── _layout.tsx      # Todo route layout
│   │   └── index.tsx        # Todo screen wrapper
│   └── _layout.tsx          # Root layout with navigation
└── package.json
```

## Technical Stack

- React Native with Expo
- TypeScript for type safety
- React Hooks for state management
- Expo Router for navigation
- JSONPlaceholder API for mock data

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm start
   ```

3. **Run the App:**
   - iOS: Press 'i' to open in iOS simulator
   - Android: Press 'a' to open in Android emulator
   - Scan QR code with Expo Go app on your device

## API Endpoints

The app uses JSONPlaceholder API for mock data:
- GET /todos?_limit=5 - Fetch tasks
- POST /todos - Add new task
- DELETE /todos/{id} - Delete task

## Implementation Details

### State Management
- Uses React's useState and useEffect hooks
- Implements optimistic updates for better UX
- Handles loading and error states

### UI Components
- Custom TaskItem component for task display
- Loading indicators and error messages
- Pull-to-refresh functionality
- Keyboard-aware input handling

### Error Handling
- Comprehensive error handling for API requests
- User-friendly error messages
- Rollback for failed operations

### Code Quality
- TypeScript for type safety
- Proper component organization
- Clean and maintainable code structure
- Follows React Native best practices

## Development

The project uses TypeScript and follows modern React Native development practices. All components are functional components using React Hooks for state management and side effects.

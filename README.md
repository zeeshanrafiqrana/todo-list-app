# React Native To-Do App

A simple React Native To-Do app with API integration built using TypeScript and React Hooks.

## Features

- View tasks fetched from a mock API
- Add new tasks
- Mark tasks as completed
- Delete tasks
- TypeScript support
- Error handling with user feedback
- Optimistic UI updates

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the app:**
   ```bash
   # For iOS
   npx react-native run-ios
   
   # For Android
   npx react-native run-android
   ```

## Project Structure

```
src/
├── components/
│   └── TaskItem.tsx     # Reusable task item component
├── screens/
│   └── HomeScreen.tsx   # Main screen with task management
├── services/
│   └── api.ts           # API integration
├── types/
│   └── Task.ts          # TypeScript definitions
└── App.tsx              # Application entry point
```

## API Endpoints

The app uses JSONPlaceholder as a mock API with the following endpoints:

- Fetch tasks: `GET https://jsonplaceholder.typicode.com/todos?_limit=5`
- Add task: `POST https://jsonplaceholder.typicode.com/todos`
- Delete task: `DELETE https://jsonplaceholder.typicode.com/todos/{id}`

## Technical Details

- Built with React Native and TypeScript
- Uses React Hooks for state management
- Implements optimistic updates for better UX
- Includes error handling and rollback mechanisms
- Follows React Native best practices

## Development

The project uses TypeScript for type safety and better development experience. All components are functional components using React Hooks for state management and side effects.

## Error Handling

The app includes comprehensive error handling:
- API errors are caught and displayed to users
- Failed operations (add/delete) are rolled back automatically
- Optimistic updates ensure smooth user experience

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

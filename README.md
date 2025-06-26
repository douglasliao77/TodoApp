# Todo Application


- [Introduction](#Introduction)
- [Frontend](#Frontend)
- [Backend](#Backend)

## Introduction

This Todo application is inspired by the .Net tutorial for creating a minimal API with ASP.NET Core. The purpose of creating this application is to get a feeling and an idea of full-stack development using React and .NET. 

Insert images

## Frontend - React

### Model-View-ViewModel

- **Model**: Handles business logic and data representation.
- **View**: The UI components that display data and interact with the user.
- **ViewModel**: Acts as an intermediary between the Model and View, managing the state and logic.

### Project Structure

```plaintext
src/
├── components/         # Pure UI components (View)
├── models/             # Business logic and data (Model)
├── viewModels/         # ViewModels managing state and logic
├── views/              # Pages connecting the ViewModel and View
└── App.js              # Main app entry point
```

## Backend - .NET

### API Reference
The APIs are the same as the tutorial.

| Method | Endpoint                | Description                 | Request Body    | Response Body         |
|--------|-------------------------|-----------------------------|------------------|------------------------|
| GET    | `/todoitems`            | Get all to-do items         | None             | Array of to-do items   |
| GET    | `/todoitems/complete`   | Get completed to-do items   | None             | Array of to-do items   |
| GET    | `/todoitems/{id}`       | Get an item by ID           | None             | To-do item             |
| POST   | `/todoitems`            | Add a new item              | To-do item       | To-do item             |
| PUT    | `/todoitems/{id}`       | Update an existing item     | To-do item       | None                   |
| DELETE | `/todoitems/{id}`       | Delete an item              | None             | None                   |


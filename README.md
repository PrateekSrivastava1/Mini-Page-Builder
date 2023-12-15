# Mini-Page-Builder

This project is a simple web-based application that allows users to create and edit blocks by dragging and dropping predefined elements onto a workspace. The user can modify the position and label of the blocks, and the changes are saved locally in the browser's storage.

## Features

- Drag and drop functionality: Users can drag predefined blocks (Label, Input, Button) onto the workspace.
- Block customization: Users can modify the label and position of each block by clicking and editing their properties.
- Local storage: Blocks and their configurations are saved in the browser's local storage, persisting across sessions.
- Download configurations: Users can download the current block configurations as a JSON file.

## Technologies Used

- React: The project is built using React, a JavaScript library for building user interfaces.
- HTML/CSS/Tailwind: Used for structuring the web page and styling the components.
- Local Storage API: Used to store and retrieve block configurations locally in the browser.

## Project Structure

The project consists of the following main components:

### DragAndDropPage Component

This component represents the workspace where blocks can be dragged and dropped. It displays the blocks and handles their positioning.

### Sidebar Component

The Sidebar contains a list of predefined blocks (Label, Input, Button) that users can drag onto the workspace. It also includes a button to download the current block configurations.

### Modal Component

The Modal is used for editing block configurations. It appears when a block is dropped onto the workspace or when a block is selected for editing.

### App Component

The main component that integrates the DragAndDropPage, Sidebar, and Modal components. It manages the state of the blocks, handles drag-and-drop events, and controls the display of the Modal.

## Getting Started

To run this project locally:

1. Clone this repository `git@github.com:PrateekSrivastava1/Mini-Page-Builder.git`.
2. Navigate to the project directory `cd Mini-Page-Builder`
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## How to Use

- Drag blocks from the Sidebar onto the blank workspace.
- Drop the block to edit its properties (label, position).
- Click on save changes to save block configurations in local storage.


## Screenshots

### Home Page
<img width="1512" alt="Screenshot 2023-12-16 at 2 07 57 AM" src="https://github.com/PrateekSrivastava1/Mini-Page-Builder/assets/65366517/5abdcff3-500e-4f62-aef1-8fa202f3a148">

### Modal
<img width="1512" alt="Screenshot 2023-12-16 at 2 08 07 AM" src="https://github.com/PrateekSrivastava1/Mini-Page-Builder/assets/65366517/3848986f-064a-4f6b-9b6a-32bda9b02a23">

## Downloaded Configuration JSON file
<img width="1512" alt="Screenshot 2023-12-16 at 2 08 42 AM" src="https://github.com/PrateekSrivastava1/Mini-Page-Builder/assets/65366517/36ba6284-07c9-4a74-901c-c9c95253677c">

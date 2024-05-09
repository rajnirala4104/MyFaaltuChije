import subprocess
import tkinter as tk
from tkinter import messagebox
import os

# List of Arcade game programs to open
arcade_programs = {
    "Chess Game": "ChessGame.py",
    "Snake Game": "snake.py",
    "Ping Pong Game": "ping.py"
}

def open_arcade_game(game):
    if game in arcade_programs:
        game_file = arcade_programs[game]
        if os.path.exists(game_file):
            subprocess.Popen(["python", game_file])
        else:
            messagebox.showerror("Error", f"Game file '{game_file}' not found.")
    else:
        messagebox.showerror("Error", f"Game '{game}' not available.")

def launch_game():
    selected_game = game_var.get()
    if selected_game:
        launch_confirmation = messagebox.askyesno("Launch Game", f"Do you want to launch {selected_game}?")
        if launch_confirmation:
            open_arcade_game(selected_game)
    else:
        messagebox.showerror("Error", "Please select a game to launch.")

# Create the Tkinter window
root = tk.Tk()
root.title("Arcade Game Selector")
root.geometry("400x250")  # Set window size

# Create a label
label = tk.Label(root, text="Select a game mode:", font=("Helvetica", 14))
label.pack(pady=10)

# Create a variable to store the selected game
game_var = tk.StringVar()

# Create radio buttons for each game
for game in arcade_programs.keys():
    tk.Radiobutton(root, text=game, variable=game_var, value=game, font=("Helvetica", 12)).pack(anchor=tk.W, padx=20)

# Create a launch button
launch_button = tk.Button(root, text="Launch Game", command=launch_game, font=("Helvetica", 12), bg="green", fg="white")
launch_button.pack(pady=20)

# Run the Tkinter event loop
root.mainloop()

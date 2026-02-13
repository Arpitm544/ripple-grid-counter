# Ripple Grid Game (React Project)

This is a small fun project made using **React and Tailwind CSS**.

It is a simple 3×3 grid where every box contains a number.  
When you click on a box, the number increases and sometimes it also affects nearby boxes like a ripple.

## 🟦 What this project does

- Shows a 3×3 grid in the center of the screen  
- Every box starts with the number **0**
- Box colors change depending on the number:
  - Even numbers → Light Gray
  - Odd numbers → Navy Blue with white text
- If any box reaches **15**, it becomes locked and turns red

## 🎨 Box Design

Each box has:

- Rounded corners (4px)
- Shadow effect like a card
- Different colors for even/odd values

## 🧠 Clicking Rules (Ripple Logic)

When you click a box:

### ✅ It always increases by +1


### Rule A: Multiple of 3

If the new value becomes divisible by 3 (like 3, 6, 9…)

- The box on the **right side** decreases by 1

But:

- If it is already the last column, nothing happens
- If the right box is locked, it will not change

---

### Rule B: Multiple of 5

If the new value becomes divisible by 5 (like 5, 10…)

- The box **below** increases by 2

But:

- If it is already the bottom row, nothing happens
- If the below box is locked, it will not change

---

## 🔒 Locked Boxes

Once a box reaches **15 or more**:

- It turns red
- It cannot be clicked anymore
- Other boxes cannot affect it

---

## ⚙️ Built With

- React.js
- Tailwind CSS

---

## ▶️ How to run this project

1. Install dependencies

```bash
npm install

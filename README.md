React Counter App

A react counter with the ability to count in increments or decrements.

How to run locally (npm install, npm run dev)

How to build (npm run build, npm start)

Counter Component

Displays the current count.

Buttons:

Increment (+1 by default)
Decrement (-1 by default)
Reset (sets count back to 0)
A Step input (<input type="number">) that sets how much to add/subtract.

Props:

initialCount (number, default 0)
initialStep (number, default 1)

Accessibility

Buttons have clear text labels.
Count region is announced on change (aria-live="polite").

State Management

Use useState for count and step.
Disable decrement if count - step would go below 0.

Home Page (/)

Renders one Counter with defaults.
Renders one Counter with custom props (e.g., initialCount={5}, initialStep={2}).

Quality

No runtime errors.
Clean layout and simple CSS.

Know issues: Step 
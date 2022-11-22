// Function:
Math.atan2()
/* Purpose: 
Can be used to measure the angle θ (in radians) between the positive x-axis and a point (x,y)

Example: The angle of a line that originates crosses the x,y axis and goes through Point (7,2)


              |
              |
              |     * (7,2)
              |
--------------|-------------
              |
              |
              |

To find the angle θ (in radians) of the line: */

function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
  }
  
  console.log(calcAngleDegrees(7, 2))

---
layout: post
title:  "Testing: Math, Code, and Video Features"
date:   2025-01-19 14:00:00 -0500
categories: demo tutorial
---

## Mathematical Equations

### Inline Math

You can write inline math like $E = mc^2$ or $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$ directly in your text.

### Display Math

For larger equations, use display mode:

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

Or the famous Euler's identity:

$$
e^{i\pi} + 1 = 0
$$

### Complex Mathematics

Here's a more complex example with matrices:

$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
\begin{bmatrix}
x_1 \\ x_2 \\ \vdots \\ x_n
\end{bmatrix}
=
\begin{bmatrix}
b_1 \\ b_2 \\ \vdots \\ b_m
\end{bmatrix}
$$

## Code Blocks with Syntax Highlighting

### Python Example

```python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]

    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])

    return fib

# Example usage
print(fibonacci(10))
# Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### JavaScript Example

```javascript
// Async function to fetch data
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return null;
    }
}

// Using the function
fetchUserData(123).then(user => {
    console.log('User data:', user);
});
```

### SQL Example

```sql
-- Complex query with JOIN and aggregation
SELECT
    c.customer_name,
    COUNT(o.order_id) as total_orders,
    SUM(o.total_amount) as total_spent,
    AVG(o.total_amount) as avg_order_value
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY c.customer_id, c.customer_name
HAVING total_orders > 5
ORDER BY total_spent DESC
LIMIT 10;
```

## Embedded Videos

### YouTube Video

To embed a YouTube video, use:

{% raw %}
```liquid
{% include video.html type="youtube" id="B3hsjbRm5WA" %}
```
{% endraw %}
{% include video.html type="youtube" id="B3hsjbRm5WA" %}
### Vimeo Video

For Vimeo videos:

{% raw %}
```liquid
{% include video.html type="vimeo" id="347119375" %}
```
{% endraw %}

### Direct Video File

For direct video files:

{% raw %}
```liquid
{% include video.html url="/assets/videos/my-video.mp4" %}
```
{% endraw %}

## Tables

You can also create tables in Markdown:

| Language | Year | Creator |
|----------|------|---------|
| Python | 1991 | Guido van Rossum |
| JavaScript | 1995 | Brendan Eich |
| Go | 2009 | Google |
| Rust | 2010 | Mozilla |

## Blockquotes

> "The only way to do great work is to love what you do."
> — Steve Jobs

## Lists

### Ordered List
1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Unordered List
- Machine Learning
  - Neural Networks
  - Deep Learning
  - Reinforcement Learning
- Web Development
  - Frontend
  - Backend
  - DevOps

## Combining Features

You can combine these features. For example, here's a mathematical formula explaining the gradient descent algorithm:

The update rule for gradient descent is:

$$\theta_{j} := \theta_{j} - \alpha \frac{\partial}{\partial \theta_{j}} J(\theta)$$

Where:
- $\theta_j$ is the parameter being updated
- $\alpha$ is the learning rate
- $J(\theta)$ is the cost function

And here's how you might implement it in Python:

```python
def gradient_descent(X, y, theta, alpha, iterations):
    m = len(y)

    for _ in range(iterations):
        predictions = X.dot(theta)
        errors = predictions - y
        gradient = (1/m) * X.T.dot(errors)
        theta = theta - alpha * gradient

    return theta
```

---
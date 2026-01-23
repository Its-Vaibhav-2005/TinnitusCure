export const htmlContent = `
<!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
        
        <style>
          body { 
            font-family: -apple-system, Roboto, sans-serif; 
            padding: 5px; 
            color: #333;
            line-height: 1.6;
          }

          /* Responsive Images */
          img { 
            max-width: 100%; 
            height: auto; 
            border-radius: 8px;
            margin: 10px 0;
          }

          /* Responsive Tables */
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            display: block; /* Allows scrolling */
            overflow-x: auto; /* Horizontal scroll for small screens */
          }
          th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }

          /* Links Styling */
          a {
            color: #007AFF;
            text-decoration: none;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        
        <h2>React Native HTML Render</h2>
        <p>This page demonstrates rendering complex content inside a WebView.</p>

        <hr />

        <h3>1. Math Formula (LaTeX)</h3>
        <p>Here is the Quadratic Formula rendered using MathJax:</p>
        <p>
          $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
        </p>

        <hr />

        <h3>2. Responsive Image</h3>
        <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80" alt="Code Example" />

        <hr />

        <h3>3. Data Table</h3>
        <p>This table will scroll horizontally if the screen is too narrow.</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price (USD)</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>Wireless Headphones</td>
              <td>$199.99</td>
              <td>Electronics</td>
            </tr>
            <tr>
              <td>102</td>
              <td>Mechanical Keyboard</td>
              <td>$89.50</td>
              <td>Accessories</td>
            </tr>
            <tr>
              <td>103</td>
              <td>Gaming Mouse</td>
              <td>$45.00</td>
              <td>Accessories</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h3>4. External Link</h3>
        <p>
          Clicking this link will open your default browser: 
          <br/>
          <a href="https://reactnative.dev">Visit React Native Docs</a>
        </p>
      </body>
    </html>
`

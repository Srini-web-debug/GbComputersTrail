export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-center">About GB Computers</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>
            GB Computers has been at the forefront of technology retail since its inception. 
            We pride ourselves on offering the latest and most reliable computing solutions 
            to our valued customers.
          </p>

          <h2>Our Mission</h2>
          <p>
            To provide high-quality computing solutions while ensuring exceptional customer 
            service and technical support. We strive to make technology accessible and 
            understandable for everyone.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>Quality - We only stock products from reputable manufacturers</li>
            <li>Service - Customer satisfaction is our top priority</li>
            <li>Innovation - We stay ahead of technological trends</li>
            <li>Integrity - We believe in honest and transparent business practices</li>
          </ul>

          <h2>Why Choose Us?</h2>
          <p>
            With years of experience in the industry, we understand the importance of 
            reliable technology in today's digital age. Our team of experts is always 
            ready to help you find the perfect solution for your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
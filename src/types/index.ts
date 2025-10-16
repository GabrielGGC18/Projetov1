export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  message: string;
  position?: string;
}

export interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';

// Mock window.scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true
});

// Mock document.getElementById and querySelector
const mockFocus = jest.fn();
const mockElement = {
  focus: mockFocus,
  setAttribute: jest.fn(),
  removeAttribute: jest.fn()
};

Object.defineProperty(document, 'getElementById', {
  value: jest.fn(() => mockElement),
  writable: true
});

Object.defineProperty(document, 'querySelector', {
  value: jest.fn(() => mockElement),
  writable: true
});

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('ScrollToTop', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should scroll to top on route change', () => {
    const { rerender } = render(
      <TestWrapper>
        <ScrollToTop />
      </TestWrapper>
    );

    // Simulate route change by rerendering with different location
    rerender(
      <TestWrapper>
        <ScrollToTop />
      </TestWrapper>
    );

    // Should call scrollTo with top: 0
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  });

  it('should not scroll for anchor links', () => {
    // Mock location with hash
    Object.defineProperty(window, 'location', {
      value: { hash: '#section' },
      writable: true
    });

    render(
      <TestWrapper>
        <ScrollToTop />
      </TestWrapper>
    );

    // Should not call scrollTo for anchor links
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it('should not scroll for modal routes', () => {
    // Mock location with modal path
    Object.defineProperty(window, 'location', {
      value: { pathname: '/modal/test' },
      writable: true
    });

    render(
      <TestWrapper>
        <ScrollToTop />
      </TestWrapper>
    );

    // Should not call scrollTo for modal routes
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it('should focus main element after scrolling', () => {
    render(
      <TestWrapper>
        <ScrollToTop />
      </TestWrapper>
    );

    // Should focus the main element
    expect(mockElement.focus).toHaveBeenCalled();
  });
});

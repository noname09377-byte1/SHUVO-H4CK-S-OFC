import { TestCase } from './types';

export const DEFAULT_TEST_CASES: TestCase[] = [
  {
    id: 'success_case',
    name: 'Happy Path: Valid Credentials',
    category: 'Success',
    description: 'Verifies successful login with standard alphanumeric credentials.',
    inputs: {
      username: 'alex_cyberpunk',
      password: 'SecurePassword123!'
    },
    expectedBehavior: 'Displays full-screen holographic success screen & custom greeting animation.'
  },
  {
    id: 'empty_fields',
    name: 'Negative: Empty Fields Validation',
    category: 'Validation',
    description: 'Ensures system halts submissions if inputs are missing or empty.',
    inputs: {
      username: '',
      password: ''
    },
    expectedBehavior: 'Form border flashes crimson red, inputs vibrate, and invalidation messages occur.'
  },
  {
    id: 'sql_injection',
    name: 'Security: SQL Injection Defense',
    category: 'Security',
    description: 'Checks form vulnerability against credential-bypass SQL sequences.',
    inputs: {
      username: "' OR '1'='1",
      password: "' OR '1'='1"
    },
    expectedBehavior: 'Triggers real-time pattern-block alerts. Safeguard layers neutralize credentials.'
  },
  {
    id: 'xss_injection',
    name: 'Security: CSS/JS Script Inoculation',
    category: 'Security',
    description: 'Analyzes inputs for Cross-Site Scripting payloads attempting DOM breaches.',
    inputs: {
      username: '<script>alert("XSS")</script>',
      password: 'password123'
    },
    expectedBehavior: 'HTML entities are sanitized automatically, safe-guards fire in console.'
  },
  {
    id: 'weak_password',
    name: 'Boundary: Low Entropy Password',
    category: 'Boundary',
    description: 'Verifies the system measures password strength and flags warning states.',
    inputs: {
      username: 'tester_pro',
      password: '123'
    },
    expectedBehavior: 'Password strength visualizer glows warning orange/red. Security block prevents process.'
  },
  {
    id: 'special_chars',
    name: 'Boundary: Extended Characters Spec',
    category: 'Boundary',
    description: 'Ensures the authenticator parses complex Unicode symbols and emojis.',
    inputs: {
      username: '🌟_cyber_🔥',
      password: '🔐🔒💥✨🚀'
    },
    expectedBehavior: 'Form successfully sanitizes and welcomes unicode users securely.'
  }
];

export const GENERAL_GUIDELINES = [
  {
    title: "Client-Side Input Hygiene",
    detail: "Sanitize all dynamic text input to disable payload parsing. Always bind values as state."
  },
  {
    title: "Rate Limiting & Anti-Brute",
    detail: "Prevent brute-force guessing by enforcing visual cool-downs and CAPTCHA modules."
  },
  {
    title: "Adaptive Cryptography",
    detail: "Always route hashes to backend servers. Never evaluate true user hashes on client runtimes."
  }
];

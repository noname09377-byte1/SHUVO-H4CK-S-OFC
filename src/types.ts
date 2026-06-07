export interface TestCase {
  id: string;
  name: string;
  category: 'Success' | 'Validation' | 'Security' | 'Boundary';
  description: string;
  inputs: {
    username: string;
    password: string;
  };
  expectedBehavior: string;
}

export interface SecurityTestResult {
  passed: boolean;
  message: string;
}

export interface CustomizationSettings {
  glowColor: 'cyan' | 'purple' | 'emerald' | 'amber';
  glassBlur: number;
  neonIntensity: number;
  showSuccessRipples: boolean;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
}

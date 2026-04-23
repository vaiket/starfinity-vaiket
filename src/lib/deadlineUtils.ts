/**
 * Utility functions for calculating and displaying deadline information
 */

/**
 * Calculate the number of days remaining until a given deadline date
 * @param deadlineDate - The deadline date string (ISO format: YYYY-MM-DD)
 * @returns Object with days remaining and formatted deadline text
 */
export function calculateDaysRemaining(deadlineDate: string): {
  daysRemaining: number;
  deadlineText: string;
  isExpired: boolean;
} {
  if (!deadlineDate) {
    return {
      daysRemaining: 0,
      deadlineText: 'Rolling / Always Open',
      isExpired: false,
    };
  }

  const deadline = new Date(deadlineDate);
  const now = new Date();
  
  // Reset time to midnight for accurate day calculation
  deadline.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  
  const diffTime = deadline.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) {
    return {
      daysRemaining: 0,
      deadlineText: 'Expired',
      isExpired: true,
    };
  }
  
  if (diffDays === 0) {
    return {
      daysRemaining: 0,
      deadlineText: 'Closes Today',
      isExpired: false,
    };
  }
  
  if (diffDays === 1) {
    return {
      daysRemaining: 1,
      deadlineText: '1 Day',
      isExpired: false,
    };
  }
  
  return {
    daysRemaining: diffDays,
    deadlineText: `${diffDays} Days`,
    isExpired: false,
  };
}

/**
 * Get the deadline text for a blog post
 * @param deadline - The deadline string (either "Rolling / Always Open" or "X Days")
 * @param deadlineDate - The actual deadline date (ISO format)
 * @returns Formatted deadline text
 */
export function getDeadlineText(deadline: string, deadlineDate?: string): string {
  // If deadlineDate is provided, calculate dynamically
  if (deadlineDate) {
    const { deadlineText } = calculateDaysRemaining(deadlineDate);
    return deadlineText;
  }
  
  // Otherwise return the static deadline text
  return deadline;
}

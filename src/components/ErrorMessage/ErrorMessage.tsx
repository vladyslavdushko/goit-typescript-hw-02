import React from 'react';

interface ErrorMessageProps {}

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
  return (
    <div>
      <p>Sorry, we have some troubles. Try next time</p>
    </div>
  );
};

export default ErrorMessage;
import React from 'react';
import Button from '../styles/Button';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
  let history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return <Button onClick={handleBackClick}>Back</Button>;
}

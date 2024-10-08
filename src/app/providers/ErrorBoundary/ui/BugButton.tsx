import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// для тестирования

export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const handleBugButton = () => {
    // prettier-ignore
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={handleBugButton}>{t('throw error')}</Button>;
};

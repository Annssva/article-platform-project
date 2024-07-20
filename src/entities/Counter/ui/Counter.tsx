import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const { t } = useTranslation();
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">
        {counterValue}
      </h1>
      <Button onClick={increment} data-testid="counter-increment-btn">{t('increment')}</Button>
      <Button onClick={decrement} data-testid="counter-decrement-btn">{t('decrement')}</Button>
    </div>
  );
};

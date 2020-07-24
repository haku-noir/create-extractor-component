import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

export const XXXExtractor: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const state = useSelector<RootState, RootState>(state => state);

  React.useEffect(() => {}, [state]);

  return null;
};

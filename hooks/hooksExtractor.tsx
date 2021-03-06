import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

const extract = (data: RootState): RootState => (
  data
);

export const XXXExtractor: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  React.useEffect(() => {
    const extractedData = extract(data);
  }, [data]);

  return null;
};

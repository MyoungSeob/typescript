import {useDispatch, useSelector} from 'react-redux';
import {ReducerType} from '../slices/store';
import {UpdateContents, update} from '../slices/contentsSlice';
export default function useUpdateContents() {
  const dispatch = useDispatch();
  const contents = useSelector<ReducerType, UpdateContents[]>(
    store => store.contents,
  );

  const onUpdateContents = (data: UpdateContents) => {
    dispatch(update(data));
  };

  return {
    contents,
    onUpdateContents,
  };
}

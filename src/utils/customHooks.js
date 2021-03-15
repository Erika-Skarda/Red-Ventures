import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlantsByInfo, setPlantsType } from '../actions/plantsAction';

export const usePlants = () => {
  const dispatch = useDispatch()
  const { plants } = useSelector(state => state.plantsReducer)
  useEffect(() => {
    dispatch(getPlantsByInfo())
  }, [dispatch])
  return plants
}
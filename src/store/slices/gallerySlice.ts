import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGallery, pictureJsonType } from './../../model/models';

interface GalleryState {
  gallery: IGallery
}

const initialState: GalleryState = {
  gallery: {
    filter: '',
    paginationStartValue: 0,
    paginationEndValue: 8,
    currentLoadedCards: [
      { author: 'Павел Федотов', name: 'Сватовство майора', year: '1852', imageNum: '0', style: 'Реализм' },
      { author: 'Эдгар Дега', name: 'Голубые танцовщицы', year: '1897', imageNum: '1', style: 'Импрессионизм' },
      { author: 'Веронезе', name: 'Пир в доме Левия', year: '1563', imageNum: '2', style: 'Маньеризм' },
      { author: 'Илья Репин', name: 'Иван Грозный и сын его Иван', year: '1885', imageNum: '3', style: 'Реализм' },
      { author: 'Константин Маковский', name: 'Портрет графини Софьи', year: '1890', imageNum: '4', style: 'Реализм' },
      { author: 'Василий Перов', name: 'Приезд гувернантки в купеческий дом', year: '1866', imageNum: '5', style: 'Реализм' },
      { author: 'Микеланджело', name: 'Сотворение Адама', year: '1511', imageNum: '6', style: 'Ренесанс' },
      { author: 'Пьер Огюст Ренуар', name: 'Прогулка в Булонском лесу', year: '1873', imageNum: '7', style: 'Импрессионизм' }
    ],
  }
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    updateFilter(state, action: PayloadAction<string>) {
      state.gallery.filter = action.payload
    },
    updatePaginationStartValue(state) {
      if (state.gallery.paginationStartValue < 232) {
        state.gallery.paginationStartValue += 8
      } else {
        return
      }
    },
    updatePaginationEndValue(state) {
      if (state.gallery.paginationStartValue < 240) {
        state.gallery.paginationEndValue += 8
      } else {
        return
      }
    },
    updateCurrentCards(state, action: PayloadAction<pictureJsonType[]>) {
      state.gallery.currentLoadedCards.push(...action.payload)
    },

  }
})

export default gallerySlice.reducer
export const {
  updateFilter, updatePaginationStartValue,
  updatePaginationEndValue, updateCurrentCards
} = gallerySlice.actions
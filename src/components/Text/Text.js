import { textStyles }     from '@/components/Text/Text.style'
import { useTranslation } from 'react-i18next'
import { Text }           from 'react-native'
import React              from 'react'

export const MyText = ({children, type, noTranslate}) => {
  const {t} = useTranslation()
  return (
    <>
    {noTranslate?(
      <Text style = {textStyles[type]}>{children}</Text>
    ):(
      <Text style = {textStyles[type]}>{t(children)}</Text>
    )}
    </>
  )
}
import { createContext } from 'react'

import { ColorMode, UserSettings } from 'models/settings'
import { encryptionService } from 'services/Encryption'

export interface SettingsContextProps {
  updateUserSettings: (settings: Partial<UserSettings>) => Promise<void>
  getUserSettings: () => UserSettings
}

export const SettingsContext = createContext<SettingsContextProps>({
  updateUserSettings: () => Promise.resolve(),
  getUserSettings: () => ({
    userId: '',
    customUsername: '',
    colorMode: ColorMode.DARK,
    playSoundOnNewMessage: true,
    showNotificationOnNewMessage: true,
    showActiveTypingStatus: true,
    publicKey: encryptionService.cryptoKeyStub,
    privateKey: encryptionService.cryptoKeyStub,
  }),
})

import type { ConsentsFormValues } from '@/pages/PreviewOrder'
import { Checkbox, Field, Input, Stack, Text } from '@chakra-ui/react'

type ConsentsFormErrors = Partial<Record<keyof ConsentsFormValues, string>>

type ConsentsFormProps = {
    value: ConsentsFormValues
    onChange: (patch: Partial<ConsentsFormValues>) => void
    errors?: ConsentsFormErrors
    disabled?: boolean
}

export default function ConsentsForm({ value, onChange, errors, disabled }: ConsentsFormProps) {
    const emailError = errors?.email
    const tosError = errors?.acceptTos
    const privacyError = errors?.acceptPrivacy

    return (
      <Stack>

        <Field.Root required invalid={!!tosError}>
          <Checkbox.Root
            checked={value.acceptTos}
            onCheckedChange={(e) => {
              const next = e.checked === true
              // Allow unchecking, but do not allow checking here
              if (!next) onChange({ acceptTos: false })
            }}
            aria-describedby='tos-help'
          >
            <Checkbox.Control />
            <Checkbox.Label>Accetto i Termini</Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>
          <Text id='tos-help' color='text.muted' fontSize='sm'>Per attivare questo consenso, clicca il link in alto e accetta nel riquadro dedicato.</Text>
          
          {tosError && <Field.ErrorText>{tosError}</Field.ErrorText>}
        </Field.Root>
  
        <Field.Root required invalid={!!privacyError}>
          <Checkbox.Root
            checked={value.acceptPrivacy}
            onCheckedChange={(e) => onChange({ acceptPrivacy: e.checked === true })}
            disabled={disabled}
          >
            <Checkbox.Control />
            <Checkbox.Label>
              Accetto la Privacy
            </Checkbox.Label>
            <Checkbox.HiddenInput />
          </Checkbox.Root>
          {privacyError && <Field.ErrorText>{privacyError}</Field.ErrorText>}
        </Field.Root>
  
        <Checkbox.Root
          checked={value.marketingOptIn}
          onCheckedChange={(e) => onChange({ marketingOptIn: e.checked === true })}
          disabled={disabled}
        >
          <Checkbox.Control />
          <Checkbox.Label>Marketing (opzionale)</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
        
        <Field.Root required invalid={!!emailError}>
            <Field.Label>
                Email
            </Field.Label>
            <Input
                placeholder='athlete@gmail.com'
                type="email"
                value={value.email}
                onChange={(e) => onChange({ email: e.target.value })}
                aria-invalid={!!emailError}
                autoComplete='email'
                inputMode='email'
                disabled={disabled}
            />
            {emailError && <Field.ErrorText>{emailError}</Field.ErrorText>}
        </Field.Root>
      </Stack>
    )
}
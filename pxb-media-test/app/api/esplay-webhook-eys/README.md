# Esplay Webhook Integration - EYS esport

This API endpoint handles webhooks from Esplay when users join a space for the EYS esport integration.

## Endpoint URL

```
https://yourdomain.com/api/esplay-webhook-eys
```

## Configuration

Configure the webhook by setting these environment variables in your `.env.local` file:

```
# Webhook secret for authorization
ESPLAY_WEBHOOK_SECRET_EYS=armless-dandelion-undercoat

# Optional: RSA private key for decryption if encryption is enabled
ESPLAY_PRIVATE_KEY_EYS="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----"
```

## How It Works

1. The endpoint receives POST requests from Esplay with user data when someone joins a space
2. It validates the webhook secret in the Authorization header (if configured)
3. It handles both encrypted and non-encrypted payloads
4. It processes the user data and prevents duplicate processing (based on SSN)
5. It returns a 200 status code to confirm successful processing

## Payload Structure

The webhook expects a JSON payload with this structure:

```json
{
  "event": "joined",
  "steamid": 24448,
  "username": "pani",
  "first_name": "Daniel",
  "last_name": "Aicardi",
  "ssn": "SE198912190470",
  "email": "pani@esplay.com",
  "phone": "+46766551337",
  "joined_association": 1734696268
}
```

## Security Considerations

- Set a webhook secret to prevent unauthorized requests
- For handling sensitive user data, enable RSA encryption
- Generate a proper RSA key pair and provide Esplay with only the public key
- In production, store processed entries in a persistent database rather than in memory

## RSA Key Generation (Example)

```bash
# Generate private key
openssl genrsa -out private.pem 2048

# Extract public key
openssl rsa -in private.pem -pubout -out public.pem
```

Provide the content of `public.pem` to Esplay for encrypting webhook payloads.

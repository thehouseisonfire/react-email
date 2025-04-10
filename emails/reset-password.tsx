import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Section,
} from '@react-email/components';

interface DifrisulResetPasswordProps {
  confirmationUrl?: string;
}

// const siteUrl = 'https://difrisul-select.com.br'
const siteUrl = 'http://localhost:3000'

export const DifrisulResetPassword = ({
  confirmationUrl = '{{ .ConfirmationURL }}',
}: DifrisulResetPasswordProps) => (
  <Html>
    <Head />
    <Preview>Redefinição de Senha</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={banner}>
          <Link href={siteUrl}>
            <Img
              src={`${siteUrl}/logos/without-text/gold-logo.svg`}
              width="176"
              height="52"
              alt="Difrisul Select Logo"
              style={logo}
            />
          </Link>
        </Section>

        <Section style={content}>
          <Heading style={h1}>Redefinição de Senha</Heading>
          <Text style={text}>Olá!</Text>
          <Text style={text}>
            Recebemos uma solicitação para redefinir a senha da sua conta Difrisul Select.
            Para criar uma nova senha, clique no botão abaixo:
          </Text>
          <Link href={confirmationUrl} style={button}>
            Redefinir Minha Senha
          </Link>
          <Text style={smallText}>
            Se você não solicitou esta alteração, por favor ignore este e-mail ou entre em contato
            com nosso suporte caso tenha dúvidas.
          </Text>
          <Text style={smallText}>
            Este link expira em 24 horas.
          </Text>
          <Text style={text}>
            Atenciosamente,<br />Equipe Difrisul
          </Text>
        </Section>

        <Section style={footer}>
          <Text style={footerText}>
            © {new Date().getFullYear()} Difrisul Ltda. Todos os direitos reservados.
          </Text>
          <Text style={social}>
            <Link href="https://www.instagram.com/difrisul/" style={socialLink}>
              Instagram
            </Link>
            {' | '}
            <Link href="https://www.facebook.com/difrisul" style={socialLink}>
              Facebook
            </Link>
            {' | '}
            <Link href="https://api.whatsapp.com/send?phone=554933222919" style={socialLink}>
              Whatsapp
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

DifrisulResetPassword.PreviewProps = {
  confirmationUrl: 'https://difrisul-select.com.br/auth/reset-password?token=abc123',
} as DifrisulResetPasswordProps;

export default DifrisulResetPassword;

// Reuse the same styles from previous templates
const main = {
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  lineHeight: 1.6,
  color: '#333430',
  backgroundColor: '#f9f9f9',
  margin: 0,
  padding: 0,
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const banner = {
  width: '100%',
  minHeight: '130px',
  backgroundColor: '#262824',
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const logo = {
  display: 'block',
  margin: '0 auto',
};

const content = {
  backgroundColor: '#ffffff',
  padding: '30px 30px 30px 36px',
  borderRadius: '4px',
  borderLeft: '6px solid #e6ae47',
};

const h1 = {
  color: '#1f201d',
  marginTop: 0,
  fontSize: '24px',
  borderBottom: '1px solid #eee',
  paddingBottom: '15px',
};

const text = {
  marginBottom: '20px',
  fontSize: '16px',
};

const smallText = {
  ...text,
  fontSize: '14px',
};

const button = {
  display: 'block',
  width: '80%',
  margin: '30px auto',
  backgroundColor: '#e6ae47',
  color: '#1f201d',
  fontWeight: 'bold',
  textDecoration: 'none',
  padding: '14px 20px',
  borderRadius: '4px',
  textAlign: 'center' as const,
};

const footer = {
  textAlign: 'center' as const,
  padding: '20px',
};

const footerText = {
  fontSize: '12px',
  color: '#666',
};

const social = {
  marginTop: '15px',
  fontSize: '12px',
  color: '#666',
};

const socialLink = {
  color: '#666',
  textDecoration: 'none',
  margin: '0 10px',
};

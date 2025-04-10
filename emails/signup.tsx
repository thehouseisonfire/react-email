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

interface DifrisulWelcomeEmailProps {
  siteUrl?: string;
  tokenHash?: string;
}

// const siteUrl = 'https://difrisul-select.com.br'
const siteUrl = 'http://localhost:3000'

export const DifrisulWelcomeEmail = ({
  tokenHash = '{{ .TokenHash }}',
}: DifrisulWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Bem-vindo ao Difrisul Select</Preview>
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
          <Heading style={h1}>Bem-vindo ao Difrisul Select</Heading>
          <Text style={text}>Olá!</Text>
          <Text style={text}>
            Estamos felizes em tê-lo como parte da nossa comunidade de
            amantes de boa comida. Para começar a explorar nosso
            catálogo exclusivo de produtos selecionados, precisamos
            verificar seu endereço de e-mail.
          </Text>
          <Text style={text}>Clique no botão abaixo para confirmar sua conta:</Text>
          <Link href={`${siteUrl}/auth/confirm?token_hash=${tokenHash}&type=email`} style={button}>
            Ativar Minha Conta
          </Link>
          <Text style={smallText}>
            Se você não se cadastrou em nosso site, por favor ignore
            este e-mail.
          </Text>
          <Text style={text}>
            Ansiosos para lhe servir,<br />Equipe Difrisul
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
  </Html >
);

DifrisulWelcomeEmail.PreviewProps = {
  siteUrl: 'https://difrisul-select.com.br',
  tokenHash: 'abc123-def456-ghi789',
} as DifrisulWelcomeEmailProps;

export default DifrisulWelcomeEmail;

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

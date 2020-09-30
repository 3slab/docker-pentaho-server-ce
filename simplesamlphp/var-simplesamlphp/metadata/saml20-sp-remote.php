<?php

$metadata['http://api-dev.atlas360.3slab.fr:4000/saml/metadata'] = array(
    'entityid' => 'http://api-dev.atlas360.3slab.fr:4000/saml/metadata',
    'contacts' => array(
    ),
    'metadata-set' => 'saml20-sp-remote',
    'expire' => 1609372800,
    'AssertionConsumerService' => array(
        0 => array(
            'Binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST',
            'Location' => 'http://api-dev.atlas360.3slab.fr:4000/saml/acs',
            'index' => 1,
        ),
    ),
    'SingleLogoutService' => array(
        0 => array(
            'Binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect',
            'Location' => 'http://api-dev.atlas360.3slab.fr:4000/saml/logout',
        ),
    ),
    'NameIDFormat' => 'urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified',
    'keys' => array(
        0 => array(
            'encryption' => false,
            'signing' => true,
            'type' => 'X509Certificate',
            'X509Certificate' => 'MIIEATCCAumgAwIBAgIUW8jmvIt2NowdlOUVlCkZTsnS/powDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAkZSMQwwCgYDVQQIDANJZGYxEDAOBgNVBAcMB0xlIFBlY3ExDTALBgNVBAoMBFN1ZXoxCzAJBgNVBAsMAjNTMRgwFgYDVQQDDA9zbHVkZ2UtYWR2YW5jZWQxKjAoBgkqhkiG9w0BCQEWG2xhYi5zbWFydHNvbHV0aW9uc0BzdWV6LmNvbTAeFw0xOTA5MTgxMzAxNTZaFw0yOTA5MTcxMzAxNTZaMIGPMQswCQYDVQQGEwJGUjEMMAoGA1UECAwDSWRmMRAwDgYDVQQHDAdMZSBQZWNxMQ0wCwYDVQQKDARTdWV6MQswCQYDVQQLDAIzUzEYMBYGA1UEAwwPc2x1ZGdlLWFkdmFuY2VkMSowKAYJKoZIhvcNAQkBFhtsYWIuc21hcnRzb2x1dGlvbnNAc3Vlei5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDQM4PrplibO/y/uostHueoI3d1Btp8oZ46Zfov2hHfDhZEOK0y7RYf2v52Y07nQ0e0kvNCkchIvfCCoeyVixVDZ+17F+PnsjZlSLPIakqin4FOAAAoisHLhyqnB2ISc6pGhB2EX4QhOzUICoqbdQb4LGdRalbLJd3pm6gvDD/YTu5EAX++WbHPkIczAmvBoOT9o0my+mtnsyTBgLVK/ZMQxr95jSCqTXsWiUyhD/zwqnfe4opEx6TTggY5kcCwOKIYkQyE/OmCb+6Q4sW9KB82WN5/tJuRVrGA+MaALkdqPcz6b0OCVHOrZBecTNI93+kM696xoR+0vqWcftcFcOwfAgMBAAGjUzBRMB0GA1UdDgQWBBS2ll4eSyKTlVV5MdDokoIMi6i9WTAfBgNVHSMEGDAWgBS2ll4eSyKTlVV5MdDokoIMi6i9WTAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQCx3U4AR9C+IZnijUENJ0LkfX2tyA9u8seTBr8MKD5MHvUnkSna0nCltrmxRoEJHvAQ+nkjaQPeW/PLRdt2o+TqIMiD+hoDwIqTEb1Qo6wN4qY6DcKix0yjBrH1kPMUuvCn7965/k0XTPrejRLqsE6NfT5F+FJsLiD+EjAR5HfhesdzxaRITOTMgCXgcNbKveAl+vFx1pI+Jxqg3HvgBza7pYRZrD8J3JvxiqRuf5s/KpbwZY4cKJoti6OQNZVI0mswIDYyQTe4jAT4QJqLUT3Z0ZuHKU2GjzWi2ulykR7x+UdxBJ5fJnY4VCAAzoT8wYsgM8pOKZU90QjhrwyCL4Wb',
        ),
    ),
    'validate.authnrequest' => true,
    'saml20.sign.assertion' => true,
    'recaptcha.siteKey'=> '6Le5lqwUAAAAADdUWWX1itA-GmYYmUtTf8KuEE4e',
);

$metadata['pentaho'] = array (
  'entityid' => 'pentaho',
  'contacts' =>
  array (
  ),
  'metadata-set' => 'saml20-sp-remote',
   'authproc' => array(
        1 => array(
            'class' => 'saml:AttributeNameID',
            'attribute' => 'uid',
            'Format' => 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
        ),
    ),
  'AssertionConsumerService' =>
  array (
    0 =>
    array (
      'Binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST',
      'Location' => 'http://lotfi-dev-env.francecentral.cloudapp.azure.com:8081/pentaho/saml/SSO',
      'index' => 0,
      'isDefault' => true,
    ),
    1 =>
    array (
      'Binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Artifact',
      'Location' => 'http://lotfi-dev-env.francecentral.cloudapp.azure.com:8081/pentaho/saml/SSO',
      'index' => 1,
    ),
  ),
  'SingleLogoutService' =>
  array (
    0 =>
    array (
      'Binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST',
      'Location' => 'http://lotfi-dev-env.francecentral.cloudapp.azure.com:8081/pentaho/saml/SingleLogout',
    ),
    1 =>
    array (
      'Binding' => 'urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect',
      'Location' => 'http://lotfi-dev-env.francecentral.cloudapp.azure.com:8081/pentaho/saml/SingleLogout',
    ),
  ),
  'NameIDFormat' => 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
  'keys' =>
  array (
    0 =>
    array (
      'encryption' => false,
      'signing' => true,
      'type' => 'X509Certificate',
      'X509Certificate' => 'MIIDUjCCAjqgAwIBAgIEUOLIQTANBgkqhkiG9w0BAQUFADBrMQswCQYDVQQGEwJGSTEQMA4GA1UE
CBMHVXVzaW1hYTERMA8GA1UEBxMISGVsc2lua2kxGDAWBgNVBAoTD1JNNSBTb2Z0d2FyZSBPeTEM
MAoGA1UECwwDUiZEMQ8wDQYDVQQDEwZhcG9sbG8wHhcNMTMwMTAxMTEyODAxWhcNMjIxMjMwMTEy
ODAxWjBrMQswCQYDVQQGEwJGSTEQMA4GA1UECBMHVXVzaW1hYTERMA8GA1UEBxMISGVsc2lua2kx
GDAWBgNVBAoTD1JNNSBTb2Z0d2FyZSBPeTEMMAoGA1UECwwDUiZEMQ8wDQYDVQQDEwZhcG9sbG8w
ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCXqP0wqL2Ai1haeTj0alwsLafhrDtUt00E
5xc7kdD7PISRA270ZmpYMB4W24Uk2QkuwaBp6dI/yRdUvPfOT45YZrqIxMe2451PAQWtEKWF5Z13
F0J4/lB71TtrzyH94RnqSHXFfvRN8EY/rzuEzrpZrHdtNs9LRyLqcRTXMMO4z7QghBuxh3K5gu7K
qxpHx6No83WNZj4B3gvWLRWv05nbXh/F9YMeQClTX1iBNAhLQxWhwXMKB4u1iPQ/KSaal3R26pON
UUmu1qVtU1quQozSTPD8HvsDqGG19v2+/N3uf5dRYtvEPfwXN3wIY+/R93vBA6lnl5nTctZIRsyg
0Gv5AgMBAAEwDQYJKoZIhvcNAQEFBQADggEBAFQwAAYUjso1VwjDc2kypK/RRcB8bMAUUIG0hLGL
82IvnKouGixGqAcULwQKIvTs6uGmlgbSG6Gn5ROb2mlBztXqQ49zRvi5qWNRttir6eyqwRFGOM6A
8rxj3Jhxi2Vb/MJn7XzeVHHLzA1sV5hwl/2PLnaL2h9WyG9QwBbwtmkMEqUt/dgixKb1Rvby/tBu
RogWgPONNSACiW+Z5o8UdAOqNMZQozD/i1gOjBXoF0F5OksjQN7xoQZLj9xXefxCFQ69FPcFDeEW
bHwSoBy5hLPNALaEUoa5zPDwlixwRjFQTc5XXaRpgIjy/2gsL8+Y5QRhyXnLqgO67BlLYW/GuHE=',
    ),
    1 =>
    array (
      'encryption' => true,
      'signing' => false,
      'type' => 'X509Certificate',
      'X509Certificate' => 'MIIDUjCCAjqgAwIBAgIEUOLIQTANBgkqhkiG9w0BAQUFADBrMQswCQYDVQQGEwJGSTEQMA4GA1UE
CBMHVXVzaW1hYTERMA8GA1UEBxMISGVsc2lua2kxGDAWBgNVBAoTD1JNNSBTb2Z0d2FyZSBPeTEM
MAoGA1UECwwDUiZEMQ8wDQYDVQQDEwZhcG9sbG8wHhcNMTMwMTAxMTEyODAxWhcNMjIxMjMwMTEy
ODAxWjBrMQswCQYDVQQGEwJGSTEQMA4GA1UECBMHVXVzaW1hYTERMA8GA1UEBxMISGVsc2lua2kx
GDAWBgNVBAoTD1JNNSBTb2Z0d2FyZSBPeTEMMAoGA1UECwwDUiZEMQ8wDQYDVQQDEwZhcG9sbG8w
ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCXqP0wqL2Ai1haeTj0alwsLafhrDtUt00E
5xc7kdD7PISRA270ZmpYMB4W24Uk2QkuwaBp6dI/yRdUvPfOT45YZrqIxMe2451PAQWtEKWF5Z13
F0J4/lB71TtrzyH94RnqSHXFfvRN8EY/rzuEzrpZrHdtNs9LRyLqcRTXMMO4z7QghBuxh3K5gu7K
qxpHx6No83WNZj4B3gvWLRWv05nbXh/F9YMeQClTX1iBNAhLQxWhwXMKB4u1iPQ/KSaal3R26pON
UUmu1qVtU1quQozSTPD8HvsDqGG19v2+/N3uf5dRYtvEPfwXN3wIY+/R93vBA6lnl5nTctZIRsyg
0Gv5AgMBAAEwDQYJKoZIhvcNAQEFBQADggEBAFQwAAYUjso1VwjDc2kypK/RRcB8bMAUUIG0hLGL
82IvnKouGixGqAcULwQKIvTs6uGmlgbSG6Gn5ROb2mlBztXqQ49zRvi5qWNRttir6eyqwRFGOM6A
8rxj3Jhxi2Vb/MJn7XzeVHHLzA1sV5hwl/2PLnaL2h9WyG9QwBbwtmkMEqUt/dgixKb1Rvby/tBu
RogWgPONNSACiW+Z5o8UdAOqNMZQozD/i1gOjBXoF0F5OksjQN7xoQZLj9xXefxCFQ69FPcFDeEW
bHwSoBy5hLPNALaEUoa5zPDwlixwRjFQTc5XXaRpgIjy/2gsL8+Y5QRhyXnLqgO67BlLYW/GuHE=',
    ),
  ),
  'validate.authnrequest' => true,
  'saml20.sign.assertion' => true,
);

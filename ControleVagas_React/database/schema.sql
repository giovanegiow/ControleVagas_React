-- Área do candidato (registro único, seu perfil / usuário)
CREATE TABLE area_candidato (
    cd_user SERIAL PRIMARY KEY,
    nome_completo VARCHAR(255),
    email VARCHAR(255),
    telefone VARCHAR(20),
    cidade VARCHAR(100),
    estado VARCHAR(2),
    linkedin VARCHAR(255),
    github VARCHAR(255),
    cargo_objetivo VARCHAR(255),
    nivel_experiencia VARCHAR(3),   -- JUN, PLE, SEN
    resumo_profissional TEXT,
    tecnologias TEXT[],             -- array nativo do Postgres, pras tags
    modalidade_preferida VARCHAR(3),
    pretensao_salarial NUMERIC(10,2),
    disponibilidade VARCHAR(100),
    link_curriculo VARCHAR(255)
);

-- Tabela principal de candidaturas
CREATE TABLE candidaturas (
    id SERIAL PRIMARY KEY,
    cd_user INT NOT NULL REFERENCES area_candidato(cd_user) ON DELETE CASCADE,
    descricao_vaga VARCHAR(255) NOT NULL,
    nome_empresa VARCHAR(255) NOT NULL,
    data_candidatura DATE NOT NULL,
    status VARCHAR(3) NOT NULL DEFAULT 'AND', -- AND, SRE, REJ, APR
    meio_contato VARCHAR(3),                  -- ABO, CAN
    modalidade VARCHAR(3),                    -- SEM, HOM, PRE, NIF
    salario_proposto NUMERIC(10,2),
    canal_fonte VARCHAR(100),
    endereco_empresa VARCHAR(255),
    observacoes TEXT,
    criado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_candidaturas_cd_user ON candidaturas(cd_user);

-- Etapas de cada candidatura (um-para-muitos)
CREATE TABLE etapas_candidatura (
    id SERIAL PRIMARY KEY,
    cd_user INT NOT NULL REFERENCES area_candidato(cd_user) ON DELETE CASCADE,
    candidatura_id INTEGER NOT NULL REFERENCES candidaturas(id) ON DELETE CASCADE,
    nome_etapa VARCHAR(100) NOT NULL,
    data_etapa DATE NOT NULL
);

CREATE INDEX idx_etapas_candidatura_cd_user ON etapas_candidatura(cd_user);

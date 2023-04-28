--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2

-- Started on 2023-04-14 12:31:42 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16388)
-- Name: innobutler; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA innobutler;


ALTER SCHEMA innobutler OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16390)
-- Name: companies; Type: TABLE; Schema: innobutler; Owner: postgres
--

CREATE TABLE innobutler.companies (
    company_id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE innobutler.companies OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16389)
-- Name: companies_company_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.companies_company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.companies_company_id_seq OWNER TO postgres;

--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 215
-- Name: companies_company_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.companies_company_id_seq OWNED BY innobutler.companies.company_id;


--
-- TOC entry 230 (class 1259 OID 16453)
-- Name: documents; Type: TABLE; Schema: innobutler; Owner: postgres
--

CREATE TABLE innobutler.documents (
    document_id integer NOT NULL,
    name character varying NOT NULL,
    file_path character varying NOT NULL,
    doc_type character varying NOT NULL,
    doc_format character varying NOT NULL,
    created_by integer NOT NULL,
    created_at timestamp without time zone NOT NULL,
    changed_by integer NOT NULL,
    changed_at timestamp without time zone NOT NULL,
    project_id integer NOT NULL
);


ALTER TABLE innobutler.documents OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16451)
-- Name: documents_changed_by_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.documents_changed_by_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.documents_changed_by_seq OWNER TO postgres;

--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 228
-- Name: documents_changed_by_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.documents_changed_by_seq OWNED BY innobutler.documents.changed_by;


--
-- TOC entry 227 (class 1259 OID 16450)
-- Name: documents_created_by_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.documents_created_by_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.documents_created_by_seq OWNER TO postgres;

--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 227
-- Name: documents_created_by_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.documents_created_by_seq OWNED BY innobutler.documents.created_by;


--
-- TOC entry 226 (class 1259 OID 16449)
-- Name: documents_document_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.documents_document_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.documents_document_id_seq OWNER TO postgres;

--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 226
-- Name: documents_document_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.documents_document_id_seq OWNED BY innobutler.documents.document_id;


--
-- TOC entry 229 (class 1259 OID 16452)
-- Name: documents_project_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.documents_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.documents_project_id_seq OWNER TO postgres;

--
-- TOC entry 3398 (class 0 OID 0)
-- Dependencies: 229
-- Name: documents_project_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.documents_project_id_seq OWNED BY innobutler.documents.project_id;


--
-- TOC entry 219 (class 1259 OID 16400)
-- Name: employees; Type: TABLE; Schema: innobutler; Owner: postgres
--

CREATE TABLE innobutler.employees (
    employee_id integer NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    company_id integer NOT NULL,
    employee_role character varying NOT NULL,
    email character varying NOT NULL,
    mobile character varying NOT NULL,
    password_hash character varying NOT NULL,
    password_salt character varying NOT NULL
);


ALTER TABLE innobutler.employees OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16399)
-- Name: employees_company_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.employees_company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.employees_company_id_seq OWNER TO postgres;

--
-- TOC entry 3399 (class 0 OID 0)
-- Dependencies: 218
-- Name: employees_company_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.employees_company_id_seq OWNED BY innobutler.employees.company_id;


--
-- TOC entry 217 (class 1259 OID 16398)
-- Name: employees_employee_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.employees_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.employees_employee_id_seq OWNER TO postgres;

--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 217
-- Name: employees_employee_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.employees_employee_id_seq OWNED BY innobutler.employees.employee_id;


--
-- TOC entry 225 (class 1259 OID 16425)
-- Name: projects; Type: TABLE; Schema: innobutler; Owner: postgres
--

CREATE TABLE innobutler.projects (
    project_id integer NOT NULL,
    name character varying NOT NULL,
    company_id integer NOT NULL
);


ALTER TABLE innobutler.projects OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16424)
-- Name: projects_company_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.projects_company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.projects_company_id_seq OWNER TO postgres;

--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 224
-- Name: projects_company_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.projects_company_id_seq OWNED BY innobutler.projects.company_id;


--
-- TOC entry 223 (class 1259 OID 16423)
-- Name: projects_project_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.projects_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.projects_project_id_seq OWNER TO postgres;

--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 223
-- Name: projects_project_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.projects_project_id_seq OWNED BY innobutler.projects.project_id;


--
-- TOC entry 222 (class 1259 OID 16416)
-- Name: works_on; Type: TABLE; Schema: innobutler; Owner: postgres
--

CREATE TABLE innobutler.works_on (
    employee_id integer NOT NULL,
    project_id integer NOT NULL
);


ALTER TABLE innobutler.works_on OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16414)
-- Name: works_on_employee_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.works_on_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.works_on_employee_id_seq OWNER TO postgres;

--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 220
-- Name: works_on_employee_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.works_on_employee_id_seq OWNED BY innobutler.works_on.employee_id;


--
-- TOC entry 221 (class 1259 OID 16415)
-- Name: works_on_project_id_seq; Type: SEQUENCE; Schema: innobutler; Owner: postgres
--

CREATE SEQUENCE innobutler.works_on_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE innobutler.works_on_project_id_seq OWNER TO postgres;

--
-- TOC entry 3404 (class 0 OID 0)
-- Dependencies: 221
-- Name: works_on_project_id_seq; Type: SEQUENCE OWNED BY; Schema: innobutler; Owner: postgres
--

ALTER SEQUENCE innobutler.works_on_project_id_seq OWNED BY innobutler.works_on.project_id;


--
-- TOC entry 3203 (class 2604 OID 16393)
-- Name: companies company_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.companies ALTER COLUMN company_id SET DEFAULT nextval('innobutler.companies_company_id_seq'::regclass);


--
-- TOC entry 3210 (class 2604 OID 16456)
-- Name: documents document_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents ALTER COLUMN document_id SET DEFAULT nextval('innobutler.documents_document_id_seq'::regclass);


--
-- TOC entry 3211 (class 2604 OID 16457)
-- Name: documents created_by; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents ALTER COLUMN created_by SET DEFAULT nextval('innobutler.documents_created_by_seq'::regclass);


--
-- TOC entry 3212 (class 2604 OID 16458)
-- Name: documents changed_by; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents ALTER COLUMN changed_by SET DEFAULT nextval('innobutler.documents_changed_by_seq'::regclass);


--
-- TOC entry 3213 (class 2604 OID 16459)
-- Name: documents project_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents ALTER COLUMN project_id SET DEFAULT nextval('innobutler.documents_project_id_seq'::regclass);


--
-- TOC entry 3204 (class 2604 OID 16403)
-- Name: employees employee_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.employees ALTER COLUMN employee_id SET DEFAULT nextval('innobutler.employees_employee_id_seq'::regclass);


--
-- TOC entry 3205 (class 2604 OID 16404)
-- Name: employees company_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.employees ALTER COLUMN company_id SET DEFAULT nextval('innobutler.employees_company_id_seq'::regclass);


--
-- TOC entry 3208 (class 2604 OID 16428)
-- Name: projects project_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.projects ALTER COLUMN project_id SET DEFAULT nextval('innobutler.projects_project_id_seq'::regclass);


--
-- TOC entry 3209 (class 2604 OID 16429)
-- Name: projects company_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.projects ALTER COLUMN company_id SET DEFAULT nextval('innobutler.projects_company_id_seq'::regclass);


--
-- TOC entry 3206 (class 2604 OID 16419)
-- Name: works_on employee_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.works_on ALTER COLUMN employee_id SET DEFAULT nextval('innobutler.works_on_employee_id_seq'::regclass);


--
-- TOC entry 3207 (class 2604 OID 16420)
-- Name: works_on project_id; Type: DEFAULT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.works_on ALTER COLUMN project_id SET DEFAULT nextval('innobutler.works_on_project_id_seq'::regclass);


--
-- TOC entry 3374 (class 0 OID 16390)
-- Dependencies: 216
-- Data for Name: companies; Type: TABLE DATA; Schema: innobutler; Owner: postgres
--

INSERT INTO innobutler.companies VALUES (1, 'Company A');
INSERT INTO innobutler.companies VALUES (2, 'Company B');
INSERT INTO innobutler.companies VALUES (3, 'Company C');


--
-- TOC entry 3388 (class 0 OID 16453)
-- Dependencies: 230
-- Data for Name: documents; Type: TABLE DATA; Schema: innobutler; Owner: postgres
--



--
-- TOC entry 3377 (class 0 OID 16400)
-- Dependencies: 219
-- Data for Name: employees; Type: TABLE DATA; Schema: innobutler; Owner: postgres
--

INSERT INTO innobutler.employees VALUES (1, 'Max', 'Mustermann', 1, 'CFO', 'max.mustermann@mail.de', '0123 4567890', 'hash123', 'salt123');


--
-- TOC entry 3383 (class 0 OID 16425)
-- Dependencies: 225
-- Data for Name: projects; Type: TABLE DATA; Schema: innobutler; Owner: postgres
--



--
-- TOC entry 3380 (class 0 OID 16416)
-- Dependencies: 222
-- Data for Name: works_on; Type: TABLE DATA; Schema: innobutler; Owner: postgres
--



--
-- TOC entry 3405 (class 0 OID 0)
-- Dependencies: 215
-- Name: companies_company_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.companies_company_id_seq', 3, true);


--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 228
-- Name: documents_changed_by_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.documents_changed_by_seq', 1, false);


--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 227
-- Name: documents_created_by_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.documents_created_by_seq', 1, false);


--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 226
-- Name: documents_document_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.documents_document_id_seq', 1, false);


--
-- TOC entry 3409 (class 0 OID 0)
-- Dependencies: 229
-- Name: documents_project_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.documents_project_id_seq', 1, false);


--
-- TOC entry 3410 (class 0 OID 0)
-- Dependencies: 218
-- Name: employees_company_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.employees_company_id_seq', 1, false);


--
-- TOC entry 3411 (class 0 OID 0)
-- Dependencies: 217
-- Name: employees_employee_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.employees_employee_id_seq', 1, true);


--
-- TOC entry 3412 (class 0 OID 0)
-- Dependencies: 224
-- Name: projects_company_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.projects_company_id_seq', 1, false);


--
-- TOC entry 3413 (class 0 OID 0)
-- Dependencies: 223
-- Name: projects_project_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.projects_project_id_seq', 1, false);


--
-- TOC entry 3414 (class 0 OID 0)
-- Dependencies: 220
-- Name: works_on_employee_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.works_on_employee_id_seq', 1, false);


--
-- TOC entry 3415 (class 0 OID 0)
-- Dependencies: 221
-- Name: works_on_project_id_seq; Type: SEQUENCE SET; Schema: innobutler; Owner: postgres
--

SELECT pg_catalog.setval('innobutler.works_on_project_id_seq', 1, false);


--
-- TOC entry 3215 (class 2606 OID 16397)
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (company_id);


--
-- TOC entry 3223 (class 2606 OID 16463)
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (document_id);


--
-- TOC entry 3217 (class 2606 OID 16408)
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (employee_id);


--
-- TOC entry 3221 (class 2606 OID 16433)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (project_id);


--
-- TOC entry 3219 (class 2606 OID 16422)
-- Name: works_on works_on_pkey; Type: CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.works_on
    ADD CONSTRAINT works_on_pkey PRIMARY KEY (employee_id, project_id);


--
-- TOC entry 3228 (class 2606 OID 16474)
-- Name: documents documents_changed_by_fkey; Type: FK CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents
    ADD CONSTRAINT documents_changed_by_fkey FOREIGN KEY (changed_by) REFERENCES innobutler.employees(employee_id) NOT VALID;


--
-- TOC entry 3229 (class 2606 OID 16469)
-- Name: documents documents_created_by_fkey; Type: FK CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents
    ADD CONSTRAINT documents_created_by_fkey FOREIGN KEY (created_by) REFERENCES innobutler.employees(employee_id) NOT VALID;


--
-- TOC entry 3230 (class 2606 OID 16464)
-- Name: documents documents_project_id_fkey; Type: FK CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.documents
    ADD CONSTRAINT documents_project_id_fkey FOREIGN KEY (project_id) REFERENCES innobutler.projects(project_id) NOT VALID;


--
-- TOC entry 3224 (class 2606 OID 16409)
-- Name: employees employees_company_id_fkey; Type: FK CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.employees
    ADD CONSTRAINT employees_company_id_fkey FOREIGN KEY (company_id) REFERENCES innobutler.companies(company_id);


--
-- TOC entry 3227 (class 2606 OID 16434)
-- Name: projects projects_company_id_fkey; Type: FK CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.projects
    ADD CONSTRAINT projects_company_id_fkey FOREIGN KEY (company_id) REFERENCES innobutler.companies(company_id);


--
-- TOC entry 3225 (class 2606 OID 16439)
-- Name: works_on works_on_employee_id_fkey; Type: FK CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.works_on
    ADD CONSTRAINT works_on_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES innobutler.employees(employee_id) NOT VALID;


--
-- TOC entry 3226 (class 2606 OID 16444)
-- Name: works_on works_on_project_id_fkey; Type: FK CONSTRAINT; Schema: innobutler; Owner: postgres
--

ALTER TABLE ONLY innobutler.works_on
    ADD CONSTRAINT works_on_project_id_fkey FOREIGN KEY (project_id) REFERENCES innobutler.projects(project_id) NOT VALID;


-- Completed on 2023-04-14 12:31:42 UTC

--
-- PostgreSQL database dump complete
--


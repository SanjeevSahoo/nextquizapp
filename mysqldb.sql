

-- Organisation 

create table t_quz_organisations
(
    id int not null auto_increment primary key,
    name varchar(100) not null
);

insert into t_quz_organisations (id, name) values (1, 'Tata Motors');
insert into t_quz_organisations (id, name) values (2, 'Tata Technologies');

-- Location

create table t_quz_locations
(
    id int not null auto_increment primary key,
    name varchar(100) not null
);

insert into t_quz_locations (id, name) values (1, 'Jamshedpur');
insert into t_quz_locations (id, name) values (2, 'Pune');

-- Department

create table t_quz_departments
(
    id int not null auto_increment primary key,
    name varchar(100) not null
);

insert into t_quz_departments (id, name) values (1, 'DPDS');

-- Users

create table t_quz_users
(
    id INT not null auto_increment primary key,
    user_name varchar(100) not null,
    email_id varchar(100),
    domain_id varchar(50) not null,
    password varchar(50),    
    roles varchar(100),
    org_id int not null,
    loc_id int not null,
    dept_id int not null,
    status varchar(25) not null,
    crt_by int,
    crt_date datetime,
    upd_by int,
    upd_date datetime
);

insert into t_quz_users (id, user_name, email_id, domain_id, password, roles, org_id, loc_id, dept_id, status ) values (1, 'Sanjeev Sahoo', 'sanjeevs.ttl@tatamotors.com','sanjeevs.ttl', 'admin123', '["Admin", "Participant"]', 1, 1, 1, 'Acitve');

-- Quiz

-- Quiz Type 
    -- - Interactive (Manual)
    -- - Interactive (Auto)
    -- - Static

-- Status
    -- - Creation
    -- - Scheduled
    -- - Active
    -- - Closed
    -- - Result Released
    -- - Completed
    -- - Discarded
    
-- participant_type
    -- - Open for All
    -- - Open for Department
    -- - Restricted Participants

create table t_quz_quiz
(
    id INT not null auto_increment primary key,
    title varchar(255) not null,
    plan_start_date date not null,
    plan_end_date date not null,
    actual_start_date date,
    actual_end_date date,
    quiz_type varchar(25) not null,
    status varchar(25) not null,
    participant_type varchar(25) not null,
    participant_organisation int,
    participant_location int,
    participant_department int,
    crt_by int not null,
    crt_date datetime not null,
    upd_by int,
    upd_date datetime
);

-- Questions

-- status
    -- - Created
    -- - Active
    -- - Closed

create table t_quz_questions
(
    id INT not null auto_increment primary key,
    quiz_id int not null,
    question_desc varchar(500) not null,
    answer_1 varchar(255) not null,
    answer_2 varchar(255) not null,
    answer_3 varchar(255) not null,
    answer_4 varchar(255) not null,
    correct_answer varchar(255) not null,
    answer_timer_duration int not null,
    status varchar(25) not null,
    crt_by int not null,
    crt_date datetime not null,
    upd_by int,
    upd_date datetime
);

-- Answers

create table t_quz_answers
(
    id INT not null auto_increment primary key,
    quiz_id int not null,
    participant_id int not null,
    question_id int not null,
    anwser varchar(255),
    anwser_time datetime not null,
    answer_correct varchar(10) not null,
    crt_by int not null,
    crt_date datetime not null,
    upd_by int,
    upd_date datetime
);
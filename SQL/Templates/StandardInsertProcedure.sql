DROP PROCEDURE IF EXISTS `<INSERTPROCEDURE>`;

CREATE PROCEDURE `<INSERTPROCEDURE>`
(
    OUT ID                <SQLIDTYPE>
	<SQLINPUTPARAMETERLIST>
)
BEGIN

INSERT INTO
    <TABLENAME>
(
<COLUMNLIST>
)
VALUES
(
<SQLPARAMETERLIST>
);

SET ID = LAST_INSERT_ID();
SELECT LAST_INSERT_ID();

END;
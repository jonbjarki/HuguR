INSERT INTO articles (title, content, description, image) VALUES (
'How to be a good listener', '
# How to be a Good Listener

In this article, you will learn how to improve your listening skills. Being a good listener is an important skill to have in both personal and professional relationships. By following the tips outlined in this article, you can become a better listener and improve your communication skills.
', 'Learn how to improve your listening skills in this article.', 'peopletalking.jpg'
);

INSERT INTO courses (name, duration, description, image_url) VALUES 
( '{"is": "Streita í háskólanámi", "en": "Stress in higher education"}', 6, '{"is": "Að öðlast þekkingu um streitu og fá innsýn í viðbrögð við streitu. Farið verður yfir bjargráð til þess að tækla streitu á áhrifaríkan hátt.", "en": "Gaining knowledge about stress and gaining insight into stress responses. Measures will be reviewed to tackle stress effectively."}', 'personsofa.png' ), 
( '{"is": "Þolmyndun", "en": "Building Resilience"}', 4, '{"is": "Kynntu þér tækni til að auka þol þitt og þróa meðferðarhætti til að takast á við áskoranir lífsins.", "en": "Discover techniques to enhance your resilience and develop coping mechanisms to deal with life''s challenges."}', 'personsofa.png' ), 
( '{"is": "Jákvæð sálfræði: Vísindin um hamingju", "en": "Positive Psychology: The Science of Happiness"}', 8, '{"is": "Rannsakaðu grundvallaratriði jákvæðrar sálfræði og lærðu staðfestar aðferðir til að rækta hamingju og vellíðan í lífinu þínu.", "en": "Explore the principles of positive psychology and learn evidence-based strategies to cultivate happiness and well-being in your life."}', 'personsofa.png' );

INSERT INTO modules (course_id, name) VALUES 
(1, '{"is": "Fyrirkomulag námskeiðs", "en": "Course structure"}'),
(1, '{"is": "Hvað er streita?", "en": "What is stress?"}'),
(1, '{"is": "Að hafa áhrif á streituvaldandi hugsunarhátt", "en": "Influencing stress-causing ways of thinking."}'),
(1, '{"is": "Lausnaleit", "en": "Problem solving"}'),
(1, '{"is": "Yfirferð og Framtíðin", "en": "Review and the Future"}'),
(2, '{"is": "Kynning", "en": "Introduction"}'),
(2, '{"is": "Hvað er þol?", "en": "What is resilience?"}'),
(2, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}'),
(2, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}'),
(3, '{"is": "Kynning", "en": "Introduction"}'),
(3, '{"is": "Hvað er jákvæð sálfræði?", "en": "What is positive psychology?"}'),
(3, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}'),
(3, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}');

INSERT INTO units (module_id, name, task) VALUES
(1, '{"is": "Velkomin", "en": "Welcome"}', NULL),
(1, '{"is": "Streita í háskólanámi", "en": "Stress in Higher Education"}', NULL),
(1, '{"is": "Verkfærakistan - verkfærin", "en": "Toolbox - The Tools"}', NULL),
(1, '{"is": "Varnagli", "en": "Precaution"}', NULL);
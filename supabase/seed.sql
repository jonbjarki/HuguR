INSERT INTO articles (title, content, description, image) VALUES (
'How to be a good listener', '
# How to be a Good Listener

In this article, you will learn how to improve your listening skills. Being a good listener is an important skill to have in both personal and professional relationships. By following the tips outlined in this article, you can become a better listener and improve your communication skills.
', 'Learn how to improve your listening skills in this article.', 'peopletalking.jpg'
);

INSERT INTO courses (name, duration, description, image_url) VALUES 
( '{"is": "Stresshöndun", "en": "Stress Management"}', 6, '{"is": "Lærðu hagnýtar aðferðir til að stjórna streitu og kvíða, þar á meðal meðvitundarþjálfun og æfingar til að draga úr streitu.", "en": "Learn effective strategies to manage stress and anxiety, including mindfulness techniques and stress-reduction exercises."}', 'personsofa.png' ), 
( '{"is": "Þolmyndun", "en": "Building Resilience"}', 4, '{"is": "Kynntu þér tækni til að auka þol þitt og þróa meðferðarhætti til að takast á við áskoranir lífsins.", "en": "Discover techniques to enhance your resilience and develop coping mechanisms to deal with life''s challenges."}', 'personsofa.png' ), 
( '{"is": "Jákvæð sálfræði: Vísindin um hamingju", "en": "Positive Psychology: The Science of Happiness"}', 8, '{"is": "Rannsakaðu grundvallaratriði jákvæðrar sálfræði og lærðu staðfestar aðferðir til að rækta hamingju og vellíðan í lífinu þínu.", "en": "Explore the principles of positive psychology and learn evidence-based strategies to cultivate happiness and well-being in your life."}', 'personsofa.png' );

INSERT INTO modules (course_id, name) VALUES 
(1, '{"is": "Kynning", "en": "Introduction"}'),
(1, '{"is": "Hvað er streita?", "en": "What is stress?"}'),
(1, '{"is": "Hvernig á að takast á við streitu", "en": "How to deal with stress"}'),
(1, NULL),
(2, '{"is": "Kynning", "en": "Introduction"}'),
(2, '{"is": "Hvað er þol?", "en": "What is resilience?"}'),
(2, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}'),
(2, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}'),
(3, '{"is": "Kynning", "en": "Introduction"}'),
(3, '{"is": "Hvað er jákvæð sálfræði?", "en": "What is positive psychology?"}'),
(3, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}'),
(3, '{"is": "Hvernig á að takast á við erfiðar aðstæður", "en": "How to deal with difficult situations"}');

INSERT INTO units (module_id, name, task) VALUES
(1, '{"is": "Kynning", "en": "Introduction"}', NULL),
(1, '{"is": "Hvað er streita?", "en": "What is stress?"}', '{"is": "Hvað er streita fyrir þér?", "en": "What is stress to you?"}');
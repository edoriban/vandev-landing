export async function generateResumePdf(info, pdfMake) {
    // Helper function to create sections in the Bronzor style
    function createSection(title, contentElements) {
        return {
            table: {
                widths: [105, '*'], // Width for section title column, '*' for content
                body: [
                    [
                        { text: title.toUpperCase(), style: 'sectionTitleCv', margin: [0, 1, 10, 0], alignment: 'left' },
                        Array.isArray(contentElements) ? { stack: contentElements, margin: [0, 1, 0, 0] } : { ...contentElements, margin: [0, 1, 0, 0] }
                    ]
                ]
            },
            layout: 'noBorders',
            margin: [0, 0, 0, 12] // Space below each section block
        };
    }

    // Content for Experience Section
    const experienceContent = info.experience.flatMap(exp => {
        const content = [
            {
                columns: [
                    { text: exp.company, style: 'itemTitleCv' },
                    { text: exp.period, style: 'itemDateCv', alignment: 'right' }
                ],
                margin: [0, 0, 0, 1]
            },
            {
                columns: [
                    { text: exp.role, style: 'itemSubtitleCv' },
                    exp.location ? { text: exp.location, style: 'itemLocationCv', alignment: 'right' } : { text: '' }
                ],
                margin: [0, 0, 0, 1]
            }
        ];
        if (exp.website) {
            content.push({ text: exp.website, style: 'itemLinkCv', link: exp.website, margin: [0, 1, 0, 2] });
        }
        if (exp.tasks && exp.tasks.length > 0) {
            content.push({ ul: exp.tasks, style: 'bulletListCv', margin: [0, 2, 0, 0] });
        }
        return [{ stack: content, margin: [0, 0, 0, 8] }]; // Margin between experience entries
    });

    // Content for Education Section
    const educationContent = info.education.map(edu => ({
        stack: [
            {
                columns: [
                    { text: edu.institution, style: 'itemTitleCv' },
                    { text: edu.period, style: 'itemDateCv', alignment: 'right' }
                ],
                margin: [0, 0, 0, 1]
            },
            {
                columns: [
                    { text: edu.degree, style: 'itemSubtitleCv' },
                    edu.location ? { text: edu.location, style: 'itemLocationCv', alignment: 'right' } : { text: '' }
                ],
                margin: [0, 0, 0, 1]
            },
            { text: edu.details, style: 'paragraphCv', margin: [0, 1, 0, 0] }
        ],
        margin: [0, 0, 0, 8] // Margin between education entries
    }));

    // Content for Projects Section (2 columns)
    const projectEntries = [];
    for (let i = 0; i < info.projects.length; i += 2) {
        const pair = info.projects.slice(i, i + 2);
        const col1Content = pair[0] ? {
            stack: [
                { text: pair[0].name, style: 'itemTitleCv' },
                { text: pair[0].role, style: 'itemSubtitleCv', margin: [0, 1, 0, 2] },
                { text: pair[0].description, style: 'paragraphCv', margin: [0, 1, 0, 2] },
                { text: `Tech: ${pair[0].technologies.join(', ')}`, style: 'smallTextCv', margin: [0, 1, 0, 2] },
                ...(pair[0].url ? [{ text: 'View Project', link: pair[0].url, style: 'itemLinkCv' }] : [])
            ]
        } : { text: '' };

        const col2Content = pair[1] ? {
            stack: [
                { text: pair[1].name, style: 'itemTitleCv' },
                { text: pair[1].role, style: 'itemSubtitleCv', margin: [0, 1, 0, 2] },
                { text: pair[1].description, style: 'paragraphCv', margin: [0, 1, 0, 2] },
                { text: `Tech: ${pair[1].technologies.join(', ')}`, style: 'smallTextCv', margin: [0, 1, 0, 2] },
                ...(pair[1].url ? [{ text: 'View Project', link: pair[1].url, style: 'itemLinkCv' }] : [])
            ]
        } : { text: '' };

        projectEntries.push({
            columns: [col1Content, col2Content],
            columnGap: 15,
            margin: [0, 0, 0, 8] // Margin between pairs of projects
        });
    }

    // Content for Skills Section
    const skillsContent = [];

    const skillLabels = {
        programming_languages: 'Programming Languages',
        frameworks_libraries: 'Frameworks & Libraries',
        tools_platforms: 'Tools & Platforms',
        databases: 'Databases',
        ai_ml: 'AI & Machine Learning',
    };

    for (const categoryKey in info.skills) {
        const categoryName = skillLabels[categoryKey] || categoryKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        skillsContent.push({ text: categoryName, style: 'itemTitleCv', margin: [0, 0, 0, 1] });
        skillsContent.push({ text: info.skills[categoryKey].join(', '), style: 'skillItemsCv', margin: [0, 0, 0, 5] });
    }

    // Content for Certifications Section
    const certificationsContent = info.certifications.map(cert => ({
        stack: [
            {
                columns: [
                    { text: cert.name, style: 'itemTitleCv' },
                    { text: cert.year, style: 'itemDateCv', alignment: 'right' }
                ]
            },
            { text: cert.issuer, style: 'itemSubtitleCv', margin: [0, 1, 0, 0] }
        ],
        margin: [0, 0, 0, 8] // Margin between certification entries
    }));

    // Content for Languages Section
    const languagesContent = info.languages.map(lang => ({
        columns: [
            { text: lang.name, style: 'itemTitleCv' },
            { text: lang.level, style: 'itemSubtitleCv', alignment: 'right' }
        ],
        margin: [0, 0, 0, 3]
    }));

    // Contact info line
    const contactInfoLine = `${info.location}  •  ${info.contact.email}  •  ${info.contact.website}`;

    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [40, 30, 40, 30], // [left, top, right, bottom]
        content: [
            // Main Header
            { text: info.name, style: 'nameHeaderCv', alignment: 'center' },
            { text: info.title, style: 'jobTitleHeaderCv', alignment: 'center', margin: [0, 0, 0, 4] },
            { text: contactInfoLine, style: 'contactInfoCv', alignment: 'center', margin: [0, 0, 0, 8] },
            { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 515, y2: 5, lineWidth: 0.5, lineColor: '#cccccc' }], margin: [0, 0, 0, 15] },

            // Sections
            createSection('Profiles', [
                { text: `LinkedIn: ${info.contact.linkedin}`, link: `https://linkedin.com/in/${info.contact.linkedin}`, style: 'itemLinkCv', margin: [0, 0, 0, 3] },
                { text: `GitHub: ${info.contact.github}`, link: `https://github.com/${info.contact.github}`, style: 'itemLinkCv' }
            ]),
            createSection('Summary', [{ text: info.summary, style: 'paragraphCv' }]),
            createSection('Experience', experienceContent),
            createSection('Education', educationContent),
            createSection('Projects', projectEntries),
            createSection('Skills', skillsContent),
            createSection('Certifications', certificationsContent),
            createSection('Languages', languagesContent),
            createSection('References', [{ text: info.references, style: 'paragraphCv' }]),
        ],
        styles: {
            nameHeaderCv: { fontSize: 24, bold: true, color: '#2c3e50', margin: [0, 0, 0, 2] },
            jobTitleHeaderCv: { fontSize: 13, color: '#34495e', margin: [0, 0, 0, 2] },
            contactInfoCv: { fontSize: 9, color: '#555555' },
            sectionTitleCv: { fontSize: 10, bold: true, color: '#333333', /*font: 'Roboto',*/ }, // Ensure font is available
            itemTitleCv: { fontSize: 10, bold: true, color: '#2c3e50'/*, font: 'Roboto'*/ },
            itemSubtitleCv: { fontSize: 9, color: '#34495e'/*, font: 'Roboto'*/ },
            itemDateCv: { fontSize: 9, bold: true, color: '#2c3e50'/*, font: 'Roboto'*/ },
            itemLocationCv: { fontSize: 9, color: '#555555'/*, font: 'Roboto'*/ },
            itemLinkCv: { fontSize: 9, color: '#0077cc', decoration: 'underline' },
            paragraphCv: { fontSize: 9, color: '#333333', lineHeight: 1.3/*, font: 'Roboto'*/ },
            bulletListCv: { fontSize: 9, color: '#333333', margin: [10, 0, 0, 0], lineHeight: 1.3/*, font: 'Roboto'*/ },
            skillItemsCv: { fontSize: 9, color: '#333333', lineHeight: 1.3/*, font: 'Roboto'*/ },
            smallTextCv: { fontSize: 8, color: '#555555', italics: true /*, font: 'Roboto'*/ },
        },
        defaultStyle: {
            font: 'Roboto',
            fontSize: 9,
            color: '#333333'
        }
    };

    pdfMake.createPdf(docDefinition).download(`${info.name.replace(/\s+/g, '_')}-Resume.pdf`);
}
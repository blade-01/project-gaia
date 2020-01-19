
const createElement = (elDatum, parent) => {
    const el = document.createElement(elDatum.type);
    if (elDatum.classList) {
        el.className = elDatum.classList.join(' ');
    }
    if (elDatum.customAttributes) {
        elDatum.customAttributes.forEach((attr) => {
            const [key, value] = attr;
            el.setAttribute(key, value);
        });
    }
    if (elDatum.textContent) {
        el.textContent = elDatum.textContent;
    }
    if (elDatum.children) {
        elDatum.children.forEach((child) => {
            createElement(child, el);
        });
    }
    parent.appendChild(el);
    return el;
}

const appendCourse = (course) => {
    const parent = document.getElementById('courseList');

    const elData = [{
        type: 'div',
        classList: 'col-12 col-md-6 col-lg-4'.split(' '),
        children: [{
            type: 'div',
            classList: 'single-popular-course mb-100 wow fadeInUp'.split(' '),
            customAttributes: [
                ['data-wow-delay', '250ms']
            ],
            children: [{
                type: 'div',
                classList: ['course-content'],
                children: [{
                        type: 'h5',
                        textContent: `${course.code}: ${course.title}`,
                    },
                    {
                        type: 'div',
                        classList: 'meta d-flex align-items-center'.split(' '),
                        children: [
                            ...course.lecturers.map((lecturer) => {
                                return {
                                    type: 'a',
                                    textContent: lecturer,
                                }
                            }),
                            {
                                type: 'span',
                                children: [{
                                    type: 'i',
                                    classList: 'fa fa-circle'.split(' '),
                                    customAttributes: [
                                        ['aria-hidden', 'true']
                                    ]
                                }]
                            },
                            {
                                type: 'a',
                                textContent: course.category,
                                customAttributes: [
                                    ['href', '#']
                                ]
                            }
                        ]
                    },
                    {
                        type: 'p',
                        textContent: course.description.slice(0, 50)
                    },
                ]
            }, ]
        }, ]
    }, ];

    elData.forEach(element => {
        createElement(element, parent);
    });

};

const loadMore = (pageNumber) => {
    const category = document.getElementById('courseList').getAttribute('category').toLowerCase();
    const url = `/api/courses/${category}/?page=${pageNumber}`;
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            if (!response.next) {
                button.parentNode.removeChild(button);
            }
            response.data.forEach(object => {
                appendCourse(object);
            });
        })
        .catch(error => console.log(error));
};

const button = document.getElementById('loadMore');
let nextPage = 2;

if (button) {
    button.addEventListener('click', () => {
        loadMore(nextPage);
        nextPage++;
    });
}

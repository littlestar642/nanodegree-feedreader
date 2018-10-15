/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        // This test checks whether all the url field are defined and are not empty.
        it('should have defined Urls', function () {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");
            }

        });

        // This test check whether all the feed names are defined and are not empty.
        it('should have defined names', function () {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            }

        });
    });


    describe('The Menu', () => {

        let check;
        // beforeEach to get the .menu-hidden DOM Element before any test
        beforeEach(() => {
            check = $('body').hasClass('menu-hidden');
        })
        // Test to check node hidden by default.
        it('should be hidden by default', () => {
            expect(check).toBe(true);
        });
        // Code to test whether the menu is hidden and shows up onclick. Also vice versa
        let notClicked = true;
        it('should change visibility when the menu icon is clicked', (done) => {
            if (check) {
                $('.menu-icon-link').trigger('click');
                check = $('body').hasClass('menu-hidden');
                expect(check).toBe(false);
            } else {
                $('.menu-icon-link').trigger('click');
                check = $('body').hasClass('menu-hidden');
                expect(check).toBe(true);
            }
            done();
        });

    })

    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    describe('Initial Entries', () => {
        let feedContainer, id;

        // beforeEach to get the feed container and set the timeout of jasmine before each test.
        beforeEach(() => {
            feedContainer = $('.feed');
            id = 0;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        })
        // Test to check the entries are not empty.
        for (feed of allFeeds) {
            it(`should not be empty for ${feed.name}`, (done) => {
                loadFeed(id, (entries) => {
                    expect(entries.length).toBeGreaterThan(0);
                    done();
                });
                id++;
            })
        }
    })

    
    describe('New Feed Selection', () => {

        let feedContainer, id;
        // beforeEach to get the feed container and set the timeout of jasmine before each test.        
        beforeEach(() => {
            feedContainer = $('.feed');
            id = 0;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        })
        // Code to test the entries from all the urls are different and unique.
        let lastentry = [];
        for (feed of allFeeds) {
            it(`should change content for ${feed.name}`, (done) => {
                loadFeed(id, (entries) => {
                    for (let i = 0; i < entries.length; i++) {
                        for (let j = 0; j < entries.length; j++) {
                            expect(entries[i]).not.toBe(lastentry[j]);
                        }
                    }
                    lastentry = entries;
                    done();
                })
            })
            id++;
        }

    })
}());
/**
 * Initializes the access restriction popups
 *
 * @module     core_course/accessrestrict
 * @package    core
 * @copyright  2017 UC Regent
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @since      3.4
 */

define(['jquery', 'core/str', 'core/modal_factory'], function($, str, ModalFactory) {
    var SELECTORS = {
        ACCESSRESTRICTIONLABEL: ".availabilitypopup .availabilityinfo > span"
    };

    return {
        init: function() {
            var modalPromise = function(bodyString) {
                return str.get_string('accessrestrictions', 'moodle')
                .then(function(string) {
                    return ModalFactory.create({
                        title: string,
                        body: bodyString
                    });
                });
            };
            $(SELECTORS.ACCESSRESTRICTIONLABEL).off().click(function(e) {
                var bodyStr = $(e.target).closest('.availabilitypopup').data('availabilityconditions');
                return modalPromise(bodyStr).then(function(modal) {
                    modal.show();
                    return false;
                });
            });
        }
    };
});
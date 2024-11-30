"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const slider_route_1 = require("../modules/slider/slider.route");
const gallery_route_1 = require("../modules/gallery/gallery.route");
const storey_route_1 = require("../modules/story/storey.route");
const video_route_1 = require("../modules/video/video.route");
const font_route_1 = require("../modules/font/font.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/slider',
        route: slider_route_1.SliderRoutes,
    },
    {
        path: '/gallery',
        route: gallery_route_1.GalleryRoutes,
    },
    {
        path: '/storey',
        route: storey_route_1.StoreyRoutes,
    },
    {
        path: '/video',
        route: video_route_1.VideoRoutes,
    },
    {
        path: '/font',
        route: font_route_1.FontRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;

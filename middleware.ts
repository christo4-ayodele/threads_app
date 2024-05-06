import { authMiddleware } from '@clerk/nextjs';

//this assigns which routes are public and can be acccesed with authorization and the ones that are not which are not puclic routes
export default authMiddleware({
  publicRoutes: ['/', '/api/webhook/clerk', '/api/uploadthing'],
  ignoredRoutes: ['/api/webhook/clerk'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

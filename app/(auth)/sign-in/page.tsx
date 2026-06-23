import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from '@/components/ui/field';
import { GithubSignInForm } from '@/features/auth/components/github-sing-in-form';
import { ModeToggle } from '@/components/my-ui/mode-toggle';

export const metadata: Metadata = {
  title: 'Sign In',
  description:
    'Sign in to VelocitySync, the AICode Reviewer with your GitHub account.',
};

type SinginFormProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

const SingIn = async ({searchParams} : SinginFormProps) => {
  const {callbackUrl} = await searchParams;
     return (
       <>
         <Card className="border-border/80 shadow-sm">
           <CardHeader className="items-center text-center">
             <div className="mb-6 flex justify-center pt-2">
               <Image
                 src="/logo.svg"
                 alt="Ai Code Reviewer"
                 width={172}
                 height={172}
                 priority
                 className="text-foreground"
               />
             </div>
             <CardTitle className="text-base">Welcome back</CardTitle>
             <CardDescription>
               Sign in with GitHub to review and manage your code.
             </CardDescription>
           </CardHeader>
           <CardContent>
             <FieldSet>
               <FieldGroup>
                 <Field>
                   <GithubSignInForm callbackUrl={callbackUrl} />
                   <FieldDescription className="text-center">
                     We only request the permissions needed to identify your
                     account. You can revoke access anytime from GitHub
                     settings.
                   </FieldDescription>
                 </Field>
               </FieldGroup>
             </FieldSet>
           </CardContent>
         </Card>
         <ModeToggle />
       </>
     );
};

export default SingIn;

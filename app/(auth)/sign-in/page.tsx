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
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field';
import { GithubSignInForm } from '@/features/auth/components/github-sing-in-form';

export const metadata: Metadata = {
  title: 'Sign In',
  description:
    'Sign in to VelocitySync, the AICode Reviewer with your GitHub account.',
};

type SinginFormProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

const SingIn = async ({ searchParams }: SinginFormProps) => {
  const { callbackUrl } = await searchParams;
  return (
    <>
      <Card className="border-border/80 shadow-sm">
        <CardHeader className="items-center text-center">
          <div className="mb-4 flex justify-center">
            <Image
              src="/logo.svg"
              alt="Ai Code Reviewer"
              width={100}
              height={100}
              priority
            />
          </div>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription className="text-muted-foreground max-w-xs">
            Sign in with GitHub to review and manage your code.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <FieldGroup>
              <Field>
                <GithubSignInForm callbackUrl={callbackUrl} />
                <FieldDescription className="text-center text-sm text-muted-foreground">
                  We only request the permissions needed to identify your
                  account. You can revoke access anytime from GitHub settings.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </CardContent>
      </Card>
    </>
  );
};

export default SingIn;
